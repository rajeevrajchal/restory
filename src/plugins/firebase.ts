import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhZhLLPJZC0o0mFaUsOCzQNXIMj-V8KCA",
  authDomain: "restory-dash.firebaseapp.com",
  projectId: "restory-dash",
  storageBucket: "restory-dash.appspot.com",
  messagingSenderId: "88396820551",
  appId: "1:88396820551:web:6150d47008dec6b0258162",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();