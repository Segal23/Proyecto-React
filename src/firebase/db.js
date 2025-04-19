import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);


export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push(doc.data());
    });

    return products;
}


export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "Categorias"));
    const category = [];

    querySnapshot.forEach((doc) => {
        category.push(doc.get("category"));
    });

    return category;
}



export const getProductByCategory = async (category) => {
    const q = query(collection(db, "Productos"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const productsByCategory = [];

    querySnapshot.forEach((doc) => {
        productsByCategory.push(doc.data())
    });

    return productsByCategory;
}


export const getProductById = async (id) => {
    const docRef = doc(db, 'Productos', id)
    const docSnap = await getDoc(docRef)
    
    if(docSnap.exists()){
        return docSnap.data()
    }else{
        console.log('No se encontró el documento')
    }
}


export const sendOrder = async (order) => {

    try{
        const docRef = await addDoc(collection(db, "Orders"), order);
        return docRef.id;
    }
    catch{
        console.error("Error al crear la orden: ", e);
    }

}
