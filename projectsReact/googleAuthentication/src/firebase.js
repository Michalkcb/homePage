// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtdcGos8jtphMskeQQh88vcfKWT1IDbqA",
  authDomain: "auth-project-2825c.firebaseapp.com",
  projectId: "auth-project-2825c",
  storageBucket: "auth-project-2825c.appspot.com",
  messagingSenderId: "3644925167",
  appId: "1:3644925167:web:6023bd75bbd88b267e271a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);