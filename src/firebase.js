// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyC0_NXZaw2oo-wmtJl6amVxT8R4z9p73do",
  authDomain: "cle-freight-llc.firebaseapp.com",
  projectId: "cle-freight-llc",
  storageBucket: "cle-freight-llc.firebasestorage.app",
  messagingSenderId: "982823403744",
  appId: "1:982823403744:web:385d0051c7a21c8de29085",
  measurementId: "G-Q3RLGF60KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage = getStorage(app);

export {db, storage}