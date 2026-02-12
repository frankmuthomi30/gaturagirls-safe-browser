// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8CJqSgI-F4cDdQnCaTl7SoJ8Yul3-Duo",
  authDomain: "kcse-2025.firebaseapp.com",
  databaseURL: "https://kcse-2025-default-rtdb.firebaseio.com",
  projectId: "kcse-2025",
  storageBucket: "kcse-2025.firebasestorage.app",
  messagingSenderId: "270232866080",
  appId: "1:270232866080:web:9a0c94d04242b92b115b45",
  measurementId: "G-1SF9SLNHE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Helper functions for Gatura Girls logs
export const logActivity = (activity: any) => {
    const activityRef = ref(db, 'gatura/activities');
    push(activityRef, {
        ...activity,
        timestamp: Date.now() // Ensure server-side acceptable timestamp
    });
};

export const logAlert = (alert: any) => {
    const alertRef = ref(db, 'gatura/alerts');
    push(alertRef, {
        ...alert,
        timestamp: Date.now()
    });
};
