// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_8v4R9wJMHIacKoh7Z3wmNTsn4k-dQ00",
  authDomain: "practice1-a41aa.firebaseapp.com",
  projectId: "practice1-a41aa",
  storageBucket: "practice1-a41aa.appspot.com",
  messagingSenderId: "1094613303652",
  appId: "1:1094613303652:web:119e32bffdcabd58fc3a71",
  measurementId: "G-LJS4GN3FG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, getFirestore, collection, getDocs, query, where, orderBy };
