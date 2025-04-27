import { addDoc, collection, DocumentData, DocumentReference } from 'firebase/firestore';
import { CreateBlogType } from '@/types/Blog';
import { db } from '../config';


async function createNewsBlog(data: CreateBlogType): Promise<DocumentReference<DocumentData, DocumentData>> {
  const author = 'admin';

  const doc = await addDoc(collection(db, 'news'), {
    title: data.title,
    content: data.content,
    image: data.image,
    date: data.date,
    category: data.category,
    author,
  });

  return doc
}

export default createNewsBlog;
