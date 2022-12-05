import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCRPgokMNt5RlRJ9-4cgh0IBlGJqFWVefg",
  authDomain: "ecommerce-cabreraluis.firebaseapp.com",
  projectId: "ecommerce-cabreraluis",
  storageBucket: "ecommerce-cabreraluis.appspot.com",
  messagingSenderId: "1062512671114",
  appId: "1:1062512671114:web:4bd10e0591fe09f267f073"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Items
export async function getData() {
  const miColeccion = collection(firestore, "productos");
  let snapShot = await getDocs(miColeccion);

  let dataDocs = snapShot.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

// Detalle de items
export async function getOneData(idParams) {
  const docRef = doc(firestore, "productos", idParams);
  const docSnapShot = await getDoc(docRef);

  return { ...docSnapShot.data(), id: docSnapShot.id };
}

// Categoria de Productos
export async function getItemsByCategory(catParams) {
  const docsCollectionRef = collection(firestore, "productos");
  const q = query(docsCollectionRef, where("category", "==", catParams));

  const snapShot = await getDocs(q);

  let dataDocs = snapShot.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

// Ordenes de compra
export async function createBuyOrder(orderData) {
  const miColeccion = collection(firestore, "orders");
  let respuesta = await addDoc(miColeccion, orderData);

  return respuesta.id;
}

export default firestore;
