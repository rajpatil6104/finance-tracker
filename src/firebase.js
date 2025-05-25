// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqnF9XbnfXePvplVP0IUaOE30AvziDRYw",
  authDomain: "finance-42d4a.firebaseapp.com",
  projectId: "finance-42d4a",
  storageBucket: "finance-42d4a.firebasestorage.app",
  messagingSenderId: "403559383323",
  appId: "1:403559383323:web:b272c996ec8040b2ee93be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add this to connect to Firestore
const db = getFirestore(app);

// ✅ Export db so you can use it in other files
export { db };
