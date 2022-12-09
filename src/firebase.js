// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtNe84L6PWWZMVK0d8qCiuiY3i5ZJfoiY",
  authDomain: "happyroulette-fd597.firebaseapp.com",
  projectId: "happyroulette-fd597",
  storageBucket: "happyroulette-fd597.appspot.com",
  messagingSenderId: "152994059392",
  appId: "1:152994059392:web:78733ed873b81a0e3d0265",
  measurementId: "G-EDLDEEHJ73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, firebaseApp, db, auth };

// 필요한 곳에서 사용할 수 있도록 내보내기
