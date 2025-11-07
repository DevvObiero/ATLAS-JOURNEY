 // src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'





const firebaseConfig = {
  apiKey: "AIzaSyBnm-H4LvTmZj9w78oShn6SX16roGU8ZEo",
  authDomain: "atlas-journey.firebaseapp.com",
  projectId: "atlas-journey",
  storageBucket: "atlas-journey.firebasestorage.app",
  messagingSenderId: "187521214041",
  appId: "1:187521214041:web:0a64ef5188da9733caf348"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const auth = getAuth(app);
export  const provider =  new GoogleAuthProvider();