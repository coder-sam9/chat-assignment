// config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Firebase project credentials extracted from google-services.json
const firebaseConfig = {
  apiKey: "AIzaSyAT-Zi19UUgHtrtdg73VFQ4ekTVrFflyw8",
  authDomain: "chatapp-57728.firebaseapp.com",  // Match project ID
  projectId: "chatapp-57728",  // Project ID
  storageBucket: "chatapp-57728.appspot.com",  // Match project ID
  messagingSenderId: "526540405150",  // Messaging sender ID
  appId: "1:526540405150:android:19a967f997ee17761bbe8f"  // Android app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for usage
export { auth, db, signInAnonymously };