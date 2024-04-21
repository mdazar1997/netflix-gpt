// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4q_-pArbN7QoRQ-OU8cStq045HQoegas",
  authDomain: "netflix-gpt-1a884.firebaseapp.com",
  projectId: "netflix-gpt-1a884",
  storageBucket: "netflix-gpt-1a884.appspot.com",
  messagingSenderId: "820563623562",
  appId: "1:820563623562:web:b01c6f7fe96e2c7deaf773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();