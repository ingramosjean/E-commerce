import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCmwYjV9yGrucJXnO_EmnJZdJS1Cu9Ew48",
    authDomain: "crwn-db-ba012.firebaseapp.com",
    databaseURL: "https://crwn-db-ba012.firebaseio.com",
    projectId: "crwn-db-ba012",
    storageBucket: "crwn-db-ba012.appspot.com",
    messagingSenderId: "26070299190",
    appId: "1:26070299190:web:e3fd8d518e2c5f6ee4de97",
    measurementId: "G-4BNLBK8KBN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SigninWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;