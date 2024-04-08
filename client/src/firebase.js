// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sem6-5085e.firebaseapp.com",
  projectId: "sem6-5085e",
  storageBucket: "sem6-5085e.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSANGER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);