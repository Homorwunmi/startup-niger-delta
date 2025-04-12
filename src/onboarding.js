import { db, auth, storage } from "./config.js";
import { doc, setDoc  } from "firebase/firestore";\
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const onboardingRegistration = async (regType, regSection, data) => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, `onboarding/${auth.currentUser.uid}/${regType}`, regSection), data);
}

export const uploadIdentification = async (cacFile, logoFile) => {
    const cacRef = ref(storage, `founder-identification/${auth.currentUser.uid}/CAC.png`);
    const logoRef = ref(storage, `founder-identification/${auth.currentUser.uid}/logo.png`);

    uploadBytes(cacRef, cacFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
    uploadBytes(logoRef, logoFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
    return url;
}