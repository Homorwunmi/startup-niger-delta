// Import the functions you need from the SDKs you need
import { app } from "./config.js";
import { getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';


// Initialize Firebase
const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async () => {
  try {
    return await sendPasswordResetEmail(auth, auth.currentUser.email);
  } catch (error) {
    throw error;
  }
};