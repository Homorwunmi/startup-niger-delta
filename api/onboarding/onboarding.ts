import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  StartupInitialType,
  UpdatedAcceleratorType,
  UpdatedAngelType,
  UpdatedStartupType,
  UpdatedVCType,
} from '@/types/Onboarding';
import { db, auth, storage } from '../config';

export async function uploadIdentification(cacFile: File, logoFile: File) {
  try {
    if (!auth.currentUser) throw new Error('user not found');

    const cacRef = ref(
      storage,
      `founder-identification/${auth.currentUser.uid}/CAC.png`
    );
    const logoRef = ref(
      storage,
      `founder-identification/${auth.currentUser.uid}/logo.png`
    );

    await Promise.all([
      uploadBytes(cacRef, cacFile),
      uploadBytes(logoRef, logoFile),
    ]);

    const [cacUrl, logoUrl] = await Promise.all([
      getDownloadURL(cacRef),
      getDownloadURL(logoRef),
    ]);

    if (!cacUrl || !logoUrl) {
      return Promise.reject(
        Error('Failed to get download URLs for uploaded files')
      );
    }

    return {
      message: 'File upload is successful',
      registrationFile: cacUrl,
      logoFile: logoUrl,
    };
  } catch (error) {
    return Promise.reject(
      new Error(
        `Error uploading files: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    );
  }
}

export async function onboardingRegistrationStartup(data: StartupInitialType) {
  console.log('onboardingRegistrationStartup', data);

  if (!auth.currentUser) throw new Error('user not found');

  let startupData: StartupInitialType | UpdatedStartupType = {
    ...data,
    userId: auth.currentUser.uid,
  };

  // upload the certificate and logo files to Firebase Storage
  if (data.certificate && data.logo) {
    const res = await uploadIdentification(data.certificate, data.logo);

    // startupData.certificate = res.registrationFile;
    // startupData.logo = res.logoFile;

    startupData = {
      ...startupData,
      certificate: res.registrationFile,
      logo: res.logoFile,
      userId: auth.currentUser.uid,
    };
  }

  return addDoc(collection(db, 'startup'), startupData)
    .then((docRef) => ({
      success: true,
      documentId: docRef.id,
      message: 'Startup registration completed successfully'
    }))
    .catch((error) => {
      throw new Error(
        `Error adding document: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    });
}

export async function onboardingRegistrationVC(data: UpdatedVCType) {
  if (!auth.currentUser) throw new Error('user not found');

  const vcData = {
    ...data,
    user_id: auth.currentUser.uid,
  };

  return addDoc(collection(db, 'vc'), vcData)
    .then((docRef) => docRef)
    .catch((error) => {
      throw new Error(
        `Error adding document: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    });
}

export async function onboardingRegistrationAngel(data: UpdatedAngelType) {
  if (!auth.currentUser) throw new Error('user not found');

  const angelData = {
    ...data,
    user_id: auth.currentUser.uid,
  };

  return addDoc(collection(db, 'angel'), angelData)
    .then((docRef) => docRef)
    .catch((error) => {
      throw new Error(
        `Error adding document: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    });
}

export async function onboardingRegistrationAccelerator(
  data: UpdatedAcceleratorType
) {
  if (!auth.currentUser) throw new Error('user not found');

  const acceleratorData = {
    ...data,
    user_id: auth.currentUser.uid,
  };

  return addDoc(collection(db, 'accelerator'), acceleratorData)
    .then((docRef) => docRef)
    .catch((error) => {
      throw new Error(
        `Error adding document: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    });
}

export const getAllFoundersOrInvestors = async (
  regType: string,
  next: DocumentReference<DocumentData> | undefined
) => {
  let documentSnapshots: QuerySnapshot;
  // Create a query to get the first 100 documents
  // If next is provided, start after the last visible document
  // Otherwise, start from the beginning
  if (!next) {
    const first = query(collection(db, regType), limit(100));
    documentSnapshots = await getDocs(first);
  } else {
    const nextQuery = query(
      collection(db, regType),
      limit(100),
      startAfter(next)
    );
    documentSnapshots = await getDocs(nextQuery);
  }

  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  return { documentSnapshots, lastVisible };
};
