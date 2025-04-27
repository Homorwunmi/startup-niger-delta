import { db, auth, storage } from "../config.js";
import { doc, setDoc  } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const onboardingRegistration = async (regType, regSection, data) => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, `onboarding/${auth.currentUser.uid}/${regType}`, regSection), data);
}

export const uploadIdentification = async (cacFile, logoFile) => {
    const cacRef = ref(storage, `founder-identification/${auth.currentUser.uid}/CAC.png`);
    const logoRef = ref(storage, `founder-identification/${auth.currentUser.uid}/logo.png`);

    await uploadBytes(cacRef, cacFile);
    console.log("CAC file uploaded successfully");
    const cacUrl = await getDownloadURL(cacRef);

    await uploadBytes(logoRef, logoFile);
    console.log("Logo file uploaded successfully");
    const logoUrl = await getDownloadURL(logoRef);

    onboardingRegistration('startup', 'founder_identification', {
        cac_url: cacUrl,
        logo_url: logoUrl
    });
    console.log("Onboarding registration completed successfully");
    return url;
}