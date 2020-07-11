import firebase from 'firebase/app';
import { firebaseApiKey } from '../security/apiKeys';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "prayer-devotionals.firebaseapp.com",
    databaseURL: "https://prayer-devotionals.firebaseio.com",
    projectId: "prayer-devotionals",
    storageBucket: "prayer-devotionals.appspot.com",
    messagingSenderId: "537078851534",
    appId: "1:537078851534:web:7c8d707e2eabdca5872d9f",
    measurementId: "G-WJZHZZ4LSL"
};

export const extraConfigProps = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    // enableRedirectHandling: false,
    // resetBeforeLogin: false
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;