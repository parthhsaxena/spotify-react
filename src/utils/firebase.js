// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc-BFftIwaxaVvR6HfTtVlbeEwHpo-Z28",
  authDomain: "spotify-react-edf4d.firebaseapp.com",
  projectId: "spotify-react-edf4d",
  storageBucket: "spotify-react-edf4d.appspot.com",
  messagingSenderId: "1087068755564",
  appId: "1:1087068755564:web:b5df61e785bf093cb26a49",
  measurementId: "G-B5284HHVZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
