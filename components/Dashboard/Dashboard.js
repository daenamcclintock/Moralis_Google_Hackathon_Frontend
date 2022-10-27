import React, { useState } from 'react'
import Footer from "../Footer/Footer"
import { Information } from 'web3uikit'
import { DashboardContainer, DashboardTitle } from './DashboardStyles'
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

const user = {
  address: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820',
  email: 'test@email.com',
  tokenYtd: 50,
  transactions: [
    {
      store: 'Store1',
      tokensToBeIssued: 3,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
    {
      store: 'Store2',
      tokensToBeIssued: 1,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
    {
      store: 'Store3',
      tokensToBeIssued: 5,
      user: '0x25b041f8cdb3E8B6EDa71Ff4B312fab8b7e6D820'
    },
  ]
}

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>My Dashboard</DashboardTitle>
      <Information 
        topic="Tokens YTD"
        information='10'
      />
      <Footer/>
    </DashboardContainer>
  )
}

export default Dashboard