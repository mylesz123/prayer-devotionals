import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYmi_Q9qDO2QG6_IhXG_fiDVHxPLsxmo4",
    authDomain: "prayer-devotionals.firebaseapp.com",
    databaseURL: "https://prayer-devotionals.firebaseio.com",
    projectId: "prayer-devotionals",
    storageBucket: "prayer-devotionals.appspot.com",
    messagingSenderId: "537078851534",
    appId: "1:537078851534:web:7c8d707e2eabdca5872d9f",
    measurementId: "G-WJZHZZ4LSL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;