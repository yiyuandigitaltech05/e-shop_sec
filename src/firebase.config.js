// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore }from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWFlW_4k6eAZsOL9GRoe8TVuUhej9U4vo",
  authDomain: "maltimart-b2fca.firebaseapp.com",
  projectId: "maltimart-b2fca",
  storageBucket: "maltimart-b2fca.appspot.com",
  messagingSenderId: "781099850346",
  appId: "1:781099850346:web:4a7d9488ccef83a40c8813",
  measurementId: "G-810ZR2QHKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app