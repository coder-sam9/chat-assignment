// config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Firebase project credentials extracted from google-services.json


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for usage
export { auth, db, signInAnonymously };