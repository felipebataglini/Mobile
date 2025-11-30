import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9KHeaR1lyWYYG9tSViaLZgE5wCqrjdSs",
  authDomain: "mobile-b33b9.firebaseapp.com",
  projectId: "mobile-b33b9",
  storageBucket: "mobile-b33b9.firebasestorage.app",
  messagingSenderId: "173684871472",
  appId: "1:173684871472:web:ceafbf3cf6795cc5d3b8f5",
  measurementId: "G-FGXXJ7TDR4"
};

const app = initializeApp(firebaseConfig);

const auth_mod = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);

export { auth_mod, db, storage };