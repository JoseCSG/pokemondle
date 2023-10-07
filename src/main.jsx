import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEOa1CnMOELYF7v3W6jnAOsuv1WPKnbPs",
  authDomain: "pokemondle.firebaseapp.com",
  projectId: "pokemondle",
  storageBucket: "pokemondle.appspot.com",
  messagingSenderId: "898861475698",
  appId: "1:898861475698:web:10580138eaf6d90a735feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
