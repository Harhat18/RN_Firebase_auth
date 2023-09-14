// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbLWwxC0LAgMCWfSkvZax_SgSWYv74srY",
  authDomain: "fir-auth-28231.firebaseapp.com",
  projectId: "fir-auth-28231",
  storageBucket: "fir-auth-28231.appspot.com",
  messagingSenderId: "221679189585",
  appId: "1:221679189585:web:99a22d3b35ae46619a0270",
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
