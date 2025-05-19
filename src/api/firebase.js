// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRRAO0BHL-7Xq8mFfNtz_w2Ksc6pB9x0",
  authDomain: "portfolio-8d2b3.firebaseapp.com",
  projectId: "portfolio-8d2b3",
  storageBucket: "portfolio-8d2b3.firebasestorage.app",
  messagingSenderId: "514860145442",
  appId: "1:514860145442:web:8d867bbe91198cf2d2237b",
  measurementId: "G-C64D37K9ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
