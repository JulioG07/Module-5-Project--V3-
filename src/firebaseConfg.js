// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRfnlLs8qsKoJXZJlGsG9vPFPKpPZKWM4",
  authDomain: "la-panaderia-goitia.firebaseapp.com",
  projectId: "la-panaderia-goitia",
  storageBucket: "la-panaderia-goitia.appspot.com",
  messagingSenderId: "917993780150",
  appId: "1:917993780150:web:64bbacb8b8de7002be4717",
  measurementId: "G-3TRX1J6ZYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
