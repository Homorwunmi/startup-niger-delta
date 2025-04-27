/* eslint-disable no-useless-catch */

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '../config';

async function registerUser(email: string, password: string) {
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

async function sendVerificationEmail() {
  try {
    if (!auth.currentUser) {
      throw new Error('No user is currently signed in.');
    }
    const verificationDetails = await sendEmailVerification(auth.currentUser);
    return verificationDetails;
  } catch (error) {
    throw error;
  }
};

async function loginUser(email: string, password: string) {
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

async function resetPassword() {
  try {
    if (!auth.currentUser || !auth.currentUser.email) {
      throw new Error('No user is currently signed in or email is unavailable.');
    }

    const passwordReset = await sendPasswordResetEmail(
      auth,
      auth.currentUser.email
    );
    return passwordReset;
  } catch (error) {
    throw error;
  }
};

const provider = new GoogleAuthProvider();
async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  loginUser,
  registerUser,
  resetPassword,
  signInWithGoogle,
  sendVerificationEmail
}
