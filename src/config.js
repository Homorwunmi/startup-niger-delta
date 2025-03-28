import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyAhrV0PrLYajbV6urlFoVoxR2PPm7uyaZ0",
  authDomain: "nigerdeltastartup.firebaseapp.com",
  databaseURL: "https://nigerdeltastartup-default-rtdb.firebaseio.com",
  projectId: "nigerdeltastartup",
  storageBucket: "nigerdeltastartup.firebasestorage.app",
  messagingSenderId: "509243735998",
  appId: "1:509243735998:web:8492362389763745e283ef",
  measurementId: "G-0PKRYT7LS0"
});


// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);