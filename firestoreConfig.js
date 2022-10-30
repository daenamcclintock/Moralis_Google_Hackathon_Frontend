// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore, firestore, collection, getDocs, doc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2A6DWTYwzQ0cklGkhz0R4j12jxBkWc1o",
  authDomain: "moralis-hackathon-cb0d7.firebaseapp.com",
  projectId: "moralis-hackathon-cb0d7",
  storageBucket: "moralis-hackathon-cb0d7.appspot.com",
  messagingSenderId: "396773732203",
  appId: "1:396773732203:web:d0d2939b96d7852012a62e",
  measurementId: "G-J6SG4V9XLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)