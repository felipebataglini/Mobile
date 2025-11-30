import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configurações do seu projeto "mobile-b33b9"
const firebaseConfig = {
  apiKey: "AIzaSyD9KHeaR1lyWYYG9tSViaLZgE5wCqrjdSs",
  authDomain: "mobile-b33b9.firebaseapp.com",
  projectId: "mobile-b33b9",
  storageBucket: "mobile-b33b9.firebasestorage.app",
  messagingSenderId: "173684871472",
  appId: "1:173684871472:web:ceafbf3cf6795cc5d3b8f5",
  measurementId: "G-FGXXJ7TDR4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa a Autenticação e o Banco de Dados
const auth_mod = getAuth(app);
const db = getFirestore(app);

// Exporta para ser usado no restante do app
export { auth_mod, db };