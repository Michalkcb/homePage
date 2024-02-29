// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';


console.log('Welcome to my Cryptu Hub');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF2HosSdsBZ0th05j0Lhx1l0QN8HJVeOE",
  authDomain: "mb-crypto-hub.firebaseapp.com",
  projectId: "mb-crypto-hub",
  storageBucket: "mb-crypto-hub.appspot.com",
  messagingSenderId: "404198622476",
  appId: "1:404198622476:web:f302acf96f86d124db3529",
  measurementId: "G-VDYJJ9D1ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, analytics, auth, db};