import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);
const productsRef = collection(db, "products");

export const getProducts = async () => {
  const querySnapshot = await getDocs(productsRef);
  const products = [];

  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
};

export const getProductById = async (productId) => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
};

export const getProductsByCategName = async (categName) => {
  const products = [];
  const q = query(productsRef, where("category", "==", categName));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });

  return products;
};

export const createOrder = async (order) => {
  try {
    const batch = writeBatch(db);
    const outOfStock = await updateStock(order, batch);

    if (outOfStock.length === 0) {
      await batch.commit();

      //create order
      const orderAdded = await addDoc(collection(db, "orders"), order);
      console.log("Order added withID: ", orderAdded.id);
      return orderAdded.id;
    } else {
      console.error("Hay productos fuera de stock");
      return null;
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

const updateStock = async (order, batch) => {
  const cart = order.items;
  const outOfStock = [];
  const ids = cart.map((item) => item.id);
  const productsAddedFromFirestore = await getDocs(
    query(productsRef, where(documentId(), "in", ids))
  );
  const { docs } = productsAddedFromFirestore;

  // update stock
  docs.forEach((doc) => {
    const dataDoc = doc.data();
    const stockDb = dataDoc.stock;

    const productAddedToCart = cart.find((prod) => prod.id === doc.id);
    const prodQuantity = productAddedToCart?.quantity;
    if (stockDb >= prodQuantity) {
      batch.update(doc.ref, { stock: stockDb - prodQuantity });
    } else {
      outOfStock.push({ id: doc.id, ...dataDoc });
    }
  });
  return outOfStock;
};
