// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBKeGFxoUDZfvzLaiJYNIzmzn1DL21Cllk",
  authDomain: "projetomobile-afab9.firebaseapp.com",
  projectId: "projetomobile-afab9",
  storageBucket: "projetomobile-afab9.firebasestorage.app",
  messagingSenderId: "456106851743",
  appId: "1:456106851743:web:a3d7836b103004845291aa"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export { auth_mod }