// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, push, set, enableLogging } from "firebase/database";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
let database;
let auth;

try {
  // Initialize Firebase only once
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  
  // Get a reference to the database service
  database = getDatabase(app);
  auth = getAuth(app);
  
  // Enable debug logging in development
  if (process.env.NODE_ENV === 'development') {
    enableLogging(true);
  }
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error', error);
  throw error; // Re-throw to handle it in the application
}

export { auth, database, ref, push, set };

// Helper function to handle database errors
export const handleDatabaseError = (error) => {
  console.error('Database Error:', error);
  // You can add more specific error handling here
  throw error;
};
