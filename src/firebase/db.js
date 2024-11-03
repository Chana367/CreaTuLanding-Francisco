import { getFirestore, collection, query, where, getDocs, doc, getDoc} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
}


export const getProductById = async (productId) => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);
  
  return docSnap.exists() ? docSnap.data() : null;
}

export const getProductsByCategName = async (categName) => {
  const products = [];
  const q = query(collection(db, "products"), where("category", "==", categName));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
}