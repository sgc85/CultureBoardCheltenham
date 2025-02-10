// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWOZXtLSA2KNcA6dK2uxIRnd2YrSgAfvw",
  authDomain: "cbctestapp.firebaseapp.com",
  projectId: "cbctestapp",
  storageBucket: "cbctestapp.firebasestorage.app",
  messagingSenderId: "101628897157",
  appId: "1:101628897157:web:ae8349105dd868a1ee86ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)