import { db, auth } from "./config.js";
import { addDoc, collection } from "firebase/firestore";


export const createNewsBlog = async (data) => {
    const author = "admin"

    await addDoc(collection(db, "news"), {
        title: data.title,
        content: data.content,
        image: data.image,
        date: data.date,
        category: data.category,
        author: author,
    });
}