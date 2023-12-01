
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGOs0iKZJKKFd4d10JDamztidp18D5Tc",
  authDomain: "ph-assignment-10-70f8d.firebaseapp.com",
  projectId: "ph-assignment-10-70f8d",
  storageBucket: "ph-assignment-10-70f8d.appspot.com",
  messagingSenderId: "815329652438",
  appId: "1:815329652438:web:7b036858632843ffd2e377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);