import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config';

async function createNewsBlog(
  title: string,
  content: string,
  image: File,
  date: Date,
  category: string
) {
  const author = 'admin';
  if (!title || !content || !image || !date || !category) {
    throw new Error('All fields are required');
  }
  if (!image.type.startsWith('image/')) {
    throw new Error('File is not an image');
  }
  if (image.size > 5 * 1024 * 1024) {
    throw new Error('File size exceeds 5MB');
  }
  if (image.size === 0) {
    throw new Error('File is empty');
  }
  const imageRef = ref(storage, `blog/${title}/${image.name}`);

  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);

  const doc = await addDoc(collection(db, 'news'), {
    title: title,
    content: content,
    image: imageUrl,
    date: date,
    category: category,
    author,
  });

  return doc;
}

async function getNewsBlog(next: DocumentReference<DocumentData> | undefined) {
  let documentSnapshots: QuerySnapshot;
  // Create a query to get the first 100 documents
  // If next is provided, start after the last visible document
  // Otherwise, start from the beginning
  if (!next) {
    const first = query(collection(db, 'news'), orderBy('date'), limit(100));
    documentSnapshots = await getDocs(first);
  } else {
    const nextQuery = query(
      collection(db, 'news'),
      orderBy('date'),
      limit(100),
      startAfter(next)
    );
    documentSnapshots = await getDocs(nextQuery);
  }

  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  return { documentSnapshots, lastVisible };
}

export { createNewsBlog, getNewsBlog };
// This code provides functions to create and retrieve news blogs from a Firebase Firestore database.
