// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHottYsmkGPXqEWTyQxEe2A7doCwLCgLQ",
  authDomain: "resumedoc-224a8.firebaseapp.com",
  projectId: "resumedoc-224a8",
  storageBucket: "resumedoc-224a8.appspot.com",
  messagingSenderId: "882063550960",
  appId: "1:882063550960:web:e60d3a758c953abb07d535",
  measurementId: "G-K8E48QFJ2E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);
