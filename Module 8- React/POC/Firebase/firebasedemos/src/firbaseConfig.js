// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH5DxiWX2GyNwLpOKOHW_wBsXFjISg2dA",
  authDomain: "pep-auth.firebaseapp.com",
  projectId: "pep-auth",
  storageBucket: "pep-auth.appspot.com",
  messagingSenderId: "308090785982",
  appId: "1:308090785982:web:24b432a93fb536a76bceef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users : firestore.collection("user")
}