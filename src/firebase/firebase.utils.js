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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/$(userAuth.uid)`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creando usuario', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SigninWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;