import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIiXhKaBDDUQ0O-pjOUt_VHa3rN6Hl_lw",
  authDomain: "roaming-e-commerce.firebaseapp.com",
  projectId: "roaming-e-commerce",
  storageBucket: "roaming-e-commerce.appspot.com",
  messagingSenderId: "801537866424",
  appId: "1:801537866424:web:0ba0333eabf3a35852924d",
  measurementId: "G-19DJJFTJK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
