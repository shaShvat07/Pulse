import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIl_emMbdodqhIwoB83UU4IzwSaYed3aU",
  authDomain: "pulse-50fce.firebaseapp.com",
  projectId: "pulse-50fce",
  storageBucket: "pulse-50fce.appspot.com",
  messagingSenderId: "82953575069",
  appId: "1:82953575069:web:02301430262f5082b79274",
  measurementId: "G-BD2YTKE41D"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
