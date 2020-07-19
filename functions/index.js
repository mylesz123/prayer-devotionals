const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Jesus is King! 🔥");
});

// create notification document in firebase
const createNotification = (notification) => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then(document => console.log("Notification created!", {document: document}))
}

exports.devotionalCreatedNotification = functions.firestore
    .document('devotionals/{devotionalID}')
    .onCreate(document => {
        const devotional = document.data();
        const notification = {
            user: `${devotional.authorFirstName} ${devotional.authorLastName}`,
            content: 'added a new devotional',
            time: admin.firestore.FieldValue.serverTimestamp(),
        }

        return createNotification(notification);
    });

exports.userJoinedNotification = functions.firestore
    .document('users/{userID}')
    .onCreate(document => {
        const user = document.data();
        const notification = {
            user: `${user.firstName} ${user.lastName}`,
            content: "joined the team!",
            time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);
    });
