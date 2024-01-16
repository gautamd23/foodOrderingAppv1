// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq0K2JDFf86fhZS-XFah2krgAxdUGVb_k",
  authDomain: "foodorderingapp-bcec3.firebaseapp.com",
  projectId: "foodorderingapp-bcec3",
  storageBucket: "foodorderingapp-bcec3.appspot.com",
  messagingSenderId: "408573715035",
  appId: "1:408573715035:web:d025bdfa8158221250557e",
  measurementId: "G-V47JBXQV6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);