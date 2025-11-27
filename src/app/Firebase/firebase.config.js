import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCKiTCQEvDrT2TC11cl8C-tpToLKg5mjBY",
  authDomain: "kids-shop-121d0.firebaseapp.com",
  projectId: "kids-shop-121d0",
  storageBucket: "kids-shop-121d0.firebasestorage.app",
  messagingSenderId: "457283364127",
  appId: "1:457283364127:web:c28ef7a26929d1a57b3c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);