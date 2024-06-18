// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b5efe.firebaseapp.com",
  projectId: "mern-estate-b5efe",
  storageBucket: "mern-estate-b5efe.appspot.com",
  messagingSenderId: "417369391",
  appId: "1:417369391:web:d854145f466d7f5ccfe5da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
