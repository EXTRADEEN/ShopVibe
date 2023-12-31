import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOg_4XxUH2YmitLfLZI0Vnxfsv7QMfnSU",
  authDomain: "shopvibe-5b646.firebaseapp.com",
  projectId: "shopvibe-5b646",
  storageBucket: "shopvibe-5b646.appspot.com",
  messagingSenderId: "652388652800",
  appId: "1:652388652800:web:51cffedd456a216d8705e5",
  measurementId: "G-KYX11MV0E9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const itemsCollection = collection(db, "items");

export { db, auth, itemsCollection, signInWithEmailAndPassword, createUserWithEmailAndPassword };
