import { doc, DocumentData, setDoc, WithFieldValue } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../config';

export const onboardingRegistration = async (
  regType: string,
  regSection: string,
  data: WithFieldValue<DocumentData>
) => {
  if (!auth.currentUser) throw new Error('user not found');

  await setDoc(
    doc(db, `onboarding/${auth.currentUser.uid}/${regType}`, regSection),
    data
  );
};

export const uploadIdentification = async (cacFile: File, logoFile: File) => {
  if (!auth.currentUser) throw new Error('user not found');

  const cacRef = ref(
    storage,
    `founder-identification/${auth.currentUser.uid}/CAC.png`
  );
  const logoRef = ref(
    storage,
    `founder-identification/${auth.currentUser.uid}/logo.png`
  );

  await uploadBytes(cacRef, cacFile);
  const cacUrl = await getDownloadURL(cacRef);

  await uploadBytes(logoRef, logoFile);
  const logoUrl = await getDownloadURL(logoRef);

  const url = onboardingRegistration('startup', 'founder_identification', {
    cac_url: cacUrl,
    logo_url: logoUrl,
  });

  return url;
};
