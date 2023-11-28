// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAECbu1tA8yRBG3gdGm-GLJBq4s0XVJHig",
  authDomain: "learn-english-with-thomas132.firebaseapp.com",
  projectId: "learn-english-with-thomas132",
  storageBucket: "learn-english-with-thomas132.appspot.com",
  messagingSenderId: "1005202250499",
  appId: "1:1005202250499:web:de891f909006c2115c2736",
  measurementId: "G-XL40N1GVDE",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
