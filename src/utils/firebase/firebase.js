import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const FNsignInWithEmailAndPassword = async (signInForm) => {
  const { email, password } = signInForm;

  if (!email || !password) return;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  // console.log(user);
  return user;
};
const db = getFirestore(app);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((item) => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const FNcreateUserWithEmailAndPassword = async (registerForm) => {
  const { displayName, email, password } = registerForm;
  if (!email || !password || !displayName) return;
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
  console.log("this is the userDocRef : ", userDocRef);
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

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
