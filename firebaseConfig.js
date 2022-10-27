import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA2A6DWTYwzQ0cklGkhz0R4j12jxBkWc1o",
    authDomain: "moralis-hackathon-cb0d7.firebaseapp.com",
    projectId: "moralis-hackathon-cb0d7",
    storageBucket: "moralis-hackathon-cb0d7.appspot.com",
    messagingSenderId: "396773732203",
    appId: "1:396773732203:web:d0d2939b96d7852012a62e",
    measurementId: "G-J6SG4V9XLJ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app)

export default firestore
