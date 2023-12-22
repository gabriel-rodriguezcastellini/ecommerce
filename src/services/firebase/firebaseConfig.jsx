// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE_CONFIG,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE_CONFIG,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE_CONFIG,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE_CONFIG,
  appId: import.meta.env.VITE_APP_ID_FIREBASE_CONFIG,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE_CONFIG,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
