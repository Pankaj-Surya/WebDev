// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH5J-dfBEcZQ6G9k0l-rk9YWjaa0hxkZE",
  authDomain: "reels-next-c61db.firebaseapp.com",
  projectId: "reels-next-c61db",
  storageBucket: "reels-next-c61db.appspot.com",
  messagingSenderId: "556004397096",
  appId: "1:556004397096:web:b105033b8de0b58bce651d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
export default app;