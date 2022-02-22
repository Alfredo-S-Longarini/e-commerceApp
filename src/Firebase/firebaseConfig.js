import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKBLabn6LwsW9eSF8whq6dAmiUErImLZ4",
  authDomain: "e-commerce-app-179d9.firebaseapp.com",
  projectId: "e-commerce-app-179d9",
  storageBucket: "e-commerce-app-179d9.appspot.com",
  messagingSenderId: "60029544141",
  appId: "1:60029544141:web:b02b86e84eabeb63b12b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);