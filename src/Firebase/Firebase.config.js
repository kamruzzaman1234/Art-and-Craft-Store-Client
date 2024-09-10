// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl4tjcLKtX04iLo_--uKcGAhs9rTpfU_k",
  authDomain: "authentication-provider-57bc6.firebaseapp.com",
  projectId: "authentication-provider-57bc6",
  storageBucket: "authentication-provider-57bc6.appspot.com",
  messagingSenderId: "1031334099363",
  appId: "1:1031334099363:web:71faae8b3cb9fc7abc8216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;