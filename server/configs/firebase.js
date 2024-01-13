// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhddjyf3dthqfy8sebjf-98plxzh_0VPw",
  authDomain: "foody-c1532.firebaseapp.com",
  projectId: "foody-c1532",
  storageBucket: "foody-c1532.appspot.com",
  messagingSenderId: "941244513981",
  appId: "1:941244513981:web:8cd5db59a852d47c7301d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
