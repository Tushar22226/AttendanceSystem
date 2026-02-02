// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCEYX-KIn5suFReiFkSzVnDvTF7bX4Tx5c",
    authDomain: "stories-b52db.firebaseapp.com",
    databaseURL: "https://stories-b52db-default-rtdb.firebaseio.com",
    projectId: "stories-b52db",
    storageBucket: "stories-b52db.appspot.com",
    messagingSenderId: "44786074125",
    appId: "1:44786074125:web:e4270c43c7e5cdf8c3cb44",
    measurementId: "G-KTZSEEPLC9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
export default app;
