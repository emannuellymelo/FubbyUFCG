// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcp-Egwm1i8czgQR1IFnTb_kpAc0Jnr3w",
  authDomain: "fubby-576c0.firebaseapp.com",
  projectId: "fubby-576c0",
  storageBucket: "fubby-576c0.appspot.com",
  messagingSenderId: "630197614579",
  appId: "1:630197614579:web:b5f83b2bbb3329e3bf8486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();