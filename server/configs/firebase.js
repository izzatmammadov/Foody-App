// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsRyGh36w0mnsi7B9xOJSPqMwSTyOLuWE",
  authDomain: "foody3-73b73.firebaseapp.com",
  projectId: "foody3-73b73",
  storageBucket: "foody3-73b73.appspot.com",
  messagingSenderId: "115326302700",
  appId: "1:115326302700:web:aec391285c1802bac8e8c9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
