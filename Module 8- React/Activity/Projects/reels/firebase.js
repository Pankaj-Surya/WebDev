// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd_y0WLcj-NtCYlt-LQz06mC9sgIZ3sgs",
  authDomain: "insta-reels-next.firebaseapp.com",
  projectId: "insta-reels-next",
  storageBucket: "insta-reels-next.appspot.com",
  messagingSenderId: "734561848111",
  appId: "1:734561848111:web:d636d0fe31e6447b9eefda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore()
export {auth,storage,db};
export default app;