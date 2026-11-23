import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyC77TlV7HguXw_Bwec1LpQOW7ht9dvLYJc",
  authDomain: "chisendposproduction001-f3eda.firebaseapp.com",
  databaseURL: "https://chisendposproduction001-f3eda-default-rtdb.firebaseio.com",
  projectId: "chisendposproduction001-f3eda",
  storageBucket: "chisendposproduction001-f3eda.firebasestorage.app",
  messagingSenderId: "314066170472",
  appId: "1:314066170472:web:b28aa24e70ca832fd041dd",
  measurementId: "G-3DFT6C1JZ9"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


