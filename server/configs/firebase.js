// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnAbxfQHafE87R5hMnfHWp37dJ1XZF4gI",
  authDomain: "foody2-58f3f.firebaseapp.com",
  projectId: "foody2-58f3f",
  storageBucket: "foody2-58f3f.appspot.com",
  messagingSenderId: "956439257633",
  appId: "1:956439257633:web:be5d64c33c8bad4102b960"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
