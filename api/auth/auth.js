// Import the functions you need from the SDKs you need
import { auth } from './config.js';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const sendVerificationEmail = async () => {
  try {
    const verificationDetails = await sendEmailVerification(auth.currentUser);
    return verificationDetails;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async () => {
  try {
    const passwordReset = await sendPasswordResetEmail(
      auth,
      auth.currentUser.email
    );
    return passwordReset;
  } catch (error) {
    throw error;
  }
};

//Google Sign-In setup
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info
    const user = result.user;
    console.log('User signed in: ', user);
    return user;
  } catch (error) {
    console.error('Error signing in with Google: ', error);
    throw error;
  }
};
