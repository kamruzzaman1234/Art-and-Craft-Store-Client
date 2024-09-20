// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAl4tjcLKtX04iLo_--uKcGAhs9rTpfU_k",
//   authDomain: "authentication-provider-57bc6.firebaseapp.com",
//   projectId: "authentication-provider-57bc6",
//   storageBucket: "authentication-provider-57bc6.appspot.com",
//   messagingSenderId: "1031334099363",
//   appId: "1:1031334099363:web:71faae8b3cb9fc7abc8216"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4iXUaovoeDBvlFH0iDKO92PZUhGtS0jQ",
  authDomain: "art-craft-project-76b0f.firebaseapp.com",
  projectId: "art-craft-project-76b0f",
  storageBucket: "art-craft-project-76b0f.appspot.com",
  messagingSenderId: "657152769911",
  appId: "1:657152769911:web:eb072c37ed9129e5346b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;