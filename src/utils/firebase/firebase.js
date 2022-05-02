import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv0nTZrm75QPslIm96hW8TZV6XgdhHNM8",
  authDomain: "fir-4-94e97.firebaseapp.com",
  projectId: "fir-4-94e97",
  storageBucket: "fir-4-94e97.appspot.com",
  messagingSenderId: "936177060508",
  appId: "1:936177060508:web:8b574a8e853b65c166fb59",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, provider);
};

const db = getFirestore(app);

export const FNcreateUserWithEmailAndPassword = async (registerForm) => {
  const { displayName, email, password } = registerForm;
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  // console.log(userCredentials);
  return userCredentials;
};

export const createUserData = async (user, additionalInformations = {}) => {
  const { email, displayName } = user;
  const createdAt = new Date();
  const userDocRef = doc(db, "users", user.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    console.log("there is no data at the require adress in the DB");
    try {
      setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformations,
      });
      console.log(
        `data have been push successfully ! email : ${email} and displayName : ${
          Object.values(additionalInformations)[0]
        }`
      );
    } catch (err) {
      console.log("error pushing data in the DB");
    }
  }
};
