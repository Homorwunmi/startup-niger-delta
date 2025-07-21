import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { API_KEY, APP_ID } from 'constant';

export const app = initializeApp({
  apiKey: API_KEY,
  authDomain: 'nigerdeltastartup.firebaseapp.com',
  databaseURL: 'https://nigerdeltastartup-default-rtdb.firebaseio.com',
  projectId: 'nigerdeltastartup',
  storageBucket: 'nigerdeltastartup.firebasestorage.app',
  messagingSenderId: '509243735998',
  appId: APP_ID,
  measurementId: 'G-0PKRYT7LS0',
});

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
