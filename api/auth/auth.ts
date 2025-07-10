/* eslint-disable no-useless-catch */

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  UserInfo,
} from 'firebase/auth';
import { auth } from '../config';

interface ExtendedUserCredential extends UserCredential {
  _tokenResponse?: {
    idToken: string;
    refreshToken: string;
    expiresIn: string;
  };
}
interface User extends UserInfo {
  user?: {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    accessToken?: string;
  };
}

async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const data = userCredential as User & ExtendedUserCredential;
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

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
}

async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const data = userCredential as User & ExtendedUserCredential;
    return data;
  } catch (error) {
    throw error;
  }
}

async function resetPassword() {
  try {
    if (!auth.currentUser || !auth.currentUser.email) {
      throw new Error(
        'No user is currently signed in or email is unavailable.'
      );
    }

    const passwordReset = await sendPasswordResetEmail(
      auth,
      auth.currentUser.email
    );
    return passwordReset;
  } catch (error) {
    throw error;
  }
}

const provider = new GoogleAuthProvider();
async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser() {
  return auth.currentUser;
}

async function signOut() {
  await auth.signOut();
}

export {
  loginUser,
  registerUser,
  resetPassword,
  signInWithGoogle,
  sendVerificationEmail,
  getUser,
  signOut,
};
