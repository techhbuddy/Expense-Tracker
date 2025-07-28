// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCJmqS-yt59Hay0CLwkaSI3RB3wyaoTwQ4",
  authDomain: "expense-tracker-f36b5.firebaseapp.com",
  projectId: "expense-tracker-f36b5",
  storageBucket: "expense-tracker-f36b5.appspot.com",
  messagingSenderId: "305043162533",
  appId: "1:305043162533:web:9ca6e013ede9df3294544c",
  measurementId: "G-SD2NHR34PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
