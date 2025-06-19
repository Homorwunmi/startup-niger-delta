import { db, auth, storage } from '../config.js';
import {
  addDoc,
  doc,
  setDoc,
  collection,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  startAfter,
  WithFieldValue,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  console.log('CAC file uploaded successfully');
  const cacUrl = await getDownloadURL(cacRef);

  await uploadBytes(logoRef, logoFile);
  console.log('Logo file uploaded successfully');
  const logoUrl = await getDownloadURL(logoRef);

  return { cacUrl, logoUrl };
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
