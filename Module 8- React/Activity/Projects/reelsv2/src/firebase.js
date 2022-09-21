// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// 1. import
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCbXusUQXd46Whuud4-vWgmkjUg1PuXIb4",
  authDomain: "insta-reels-37f1b.firebaseapp.com",
  projectId: "insta-reels-37f1b",
  storageBucket: "insta-reels-37f1b.appspot.com",
  messagingSenderId: "886353224354",
  appId: "1:886353224354:web:34586c52304ce03bf6edfb"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const googleAuth = new firebase.auth.GoogleAuthProvider();


// firebase authentication
export const auth = firebase.auth();

// 2. firebase firestore
const firestore = firebase.firestore();

// 3. to shorten the syntax
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp:
        firebase.firestore.FieldValue.serverTimestamp,
}



// firebase storage
export const storage = firebase.storage();

export default firebase;