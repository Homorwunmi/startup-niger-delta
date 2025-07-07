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
import { db, auth, storage } from '../config';

export const onboardingRegistration = async (
  regType: string,
  data: Record<string, any>
) => {
  if (!auth.currentUser) throw new Error('user not found');
  data.user_id = auth.currentUser.uid;

  const docRef = await addDoc(collection(db, `${regType}`), data);

  return docRef;
};

export const uploadIdentification = async (cacFile: File, logoFile: File) => {
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
      return Promise.reject(Error('Failed to get download URLs for uploaded files'));
    }

    return { message: 'File upload is successful', registrationFile: cacUrl, logoFile: logoUrl };
  } catch (error) {
    return Promise.reject(new Error(`Error uploading files: ${error instanceof Error ? error.message : 'Unknown error'}`));
  }
};

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
