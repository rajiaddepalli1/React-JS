// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuPmW9doMP7rSsMQexsskldtEUIILR0Vs",
  authDomain: "reactjs-tesla-clone.firebaseapp.com",
  projectId: "reactjs-tesla-clone",
  storageBucket: "reactjs-tesla-clone.appspot.com",
  messagingSenderId: "983946718377",
  appId: "1:983946718377:web:920c7a8406c9bd62360db8",
  measurementId: "G-YR0DQK43L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);