import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Configurações do seu projeto "mobile-b33b9"
const firebaseConfig = {
  apiKey: "AIzaSyAE4RZDceltc3P7DmFYWV4CdQp8o9wT43k",
  authDomain: "project-mobile-2d528.firebaseapp.com",
  projectId: "project-mobile-2d528",
  storageBucket: "project-mobile-2d528.firebasestorage.app",
  messagingSenderId: "180133585431",
  appId: "1:180133585431:web:cd93842dc77d8e52f2b252",
  measurementId: "G-Q9N6CKKHCJ"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa a Autenticação e o Banco de Dados
const auth_mod = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);

// Exporta para ser usado no restante do app
export { auth_mod, db };