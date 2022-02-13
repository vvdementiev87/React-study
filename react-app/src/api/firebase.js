import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBE-G4vzz1n-6IyzY9UISWgQI50nTtxwus",
  authDomain: "react-initial-ea081.firebaseapp.com",
  databaseURL:
    "https://react-initial-ea081-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-initial-ea081",
  storageBucket: "react-initial-ea081.appspot.com",
  messagingSenderId: "728158096776",
  appId: "1:728158096776:web:77da6dc5d7a1cd276abe3d",
  measurementId: "G-TZKKS1DK57",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(firebaseApp);
console.log("database", firebaseDB);
