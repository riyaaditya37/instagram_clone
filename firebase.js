// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCITyaOovc91rCNgLQ1SueH04xjB6TWtHo",
  authDomain: "instagram-clone-4725e.firebaseapp.com",
  projectId: "instagram-clone-4725e",
  storageBucket: "instagram-clone-4725e.appspot.com",
  messagingSenderId: "6697441293",
  appId: "1:6697441293:web:b430b58c026267cd9c9d44"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore() ;
const storage = getStorage() ;

export {app, db, storage} ;