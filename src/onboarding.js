import { db, auth } from "./config.js";
import { doc, setDoc  } from "firebase/firestore";


export const onboardingRegistration = async (regType, regSection, data) => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, `onboarding/${auth.currentUser.uid}/${regType}`, regSection), data);
}