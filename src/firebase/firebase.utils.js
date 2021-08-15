import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAORgxesTgoDfdZDqf_VY1iEzyTaRDohbQ",
  authDomain: "camera-shop-db.firebaseapp.com",
  databaseURL: "https://camera-shop-db.firebaseio.com",
  projectId: "camera-shop-db",
  storageBucket: "camera-shop-db.appspot.com",
  messagingSenderId: "80115904774",
  appId: "1:80115904774:web:e7ada12b2512b713d5ee87",
  measurementId: "G-KVVK1MMT8P"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // sign out case

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
