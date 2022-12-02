// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, firebaseApp, db, auth };

// 필요한 곳에서 사용할 수 있도록 내보내기
