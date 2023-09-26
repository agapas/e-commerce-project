import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAORgxesTgoDfdZDqf_VY1iEzyTaRDohbQ",
  authDomain: "camera-shop-db.firebaseapp.com",
  databaseURL:
    "https://camera-shop-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "camera-shop-db",
  storageBucket: "camera-shop-db.appspot.com",
  messagingSenderId: "80115904774",
  appId: "1:80115904774:web:e7ada12b2512b713d5ee87",
  measurementId: "G-KVVK1MMT8P",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(); // uses default initialized instance of Firebase, so pass Firebase instance only if multiple instances
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); // uses default initialized instance of Firebase

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  if (!userAuth) return; // sign out case

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData, // to include displayName that is absent in authorized user when registering
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// export const signOutUser = async () => await signOut(auth);
