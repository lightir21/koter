import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoIC4mvQlDcS4GUCwn5PuqG9TzVTWVIFI",
  authDomain: "koter-9c91c.firebaseapp.com",
  projectId: "koter-9c91c",
  storageBucket: "koter-9c91c.appspot.com",
  messagingSenderId: "1070590294115",
  appId: "1:1070590294115:web:47f09114f2566067e9a056",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const colRef = collection(db, "drivers");
