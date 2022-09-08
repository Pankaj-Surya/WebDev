// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// 1. import
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-lhOwPz-xbA1Ojm5MRbBYtb8yzWhXmI",
  authDomain: "insta123-e057d.firebaseapp.com",
  projectId: "insta123-e057d",
  storageBucket: "insta123-e057d.appspot.com",
  messagingSenderId: "354096834728",
  appId: "1:354096834728:web:a237219d2aa62759517a9d"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;
export const auth = firebase.auth();

// 2.
const firestore = firebase.firestore();

// 3. to shorten the syntax
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp:
        firebase.firestore.FieldValue.serverTimestamp,
}
