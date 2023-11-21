// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB636TegSvA3zecgFSSNvL74WLpUyCeTuw",
  authDomain: "my-english-grammar-app.firebaseapp.com",
  projectId: "my-english-grammar-app",
  storageBucket: "my-english-grammar-app.appspot.com",
  messagingSenderId: "399817192510",
  appId: "1:399817192510:web:df2f741d258b6973774d6f",
  measurementId: "G-FSRLGW27YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
