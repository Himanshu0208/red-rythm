// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATX7Zxd3lFW3wxEkLxgCZZ7vUrLkxOyv0",
  authDomain: "sem6-5085e.firebaseapp.com",
  projectId: "sem6-5085e",
  storageBucket: "sem6-5085e.appspot.com",
  messagingSenderId: "405445147662",
  appId: "1:405445147662:web:00f425a2f1dd258746105f"
};

// Initialize Firebase
console.log(firebaseConfig);
export const app = initializeApp(firebaseConfig);