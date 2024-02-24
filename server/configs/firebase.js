import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhddjyf3dthqfy8sebjf-98plxzh_0VPw",
  authDomain: "foody-c1532.firebaseapp.com",
  projectId: "foody-c1532",
  storageBucket: "foody-c1532.appspot.com",
  messagingSenderId: "941244513981",
  appId: "1:941244513981:web:7e23347086df9fab7301d4"
};

export const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
