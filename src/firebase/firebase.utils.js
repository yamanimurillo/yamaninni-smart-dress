// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { PhoneAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA9_Cw-X17y4B2PkSCfkwSBaAJ0h9KnoM",
  authDomain: "yamaninni-dressing-db.firebaseapp.com",
  projectId: "yamaninni-dressing-db",
  storageBucket: "yamaninni-dressing-db.appspot.com",
  messagingSenderId: "914901858489",
  appId: "1:914901858489:web:3a61921c24753b94aec368",
  measurementId: "G-E0FG4GYNDG" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Initialize Google Auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;