import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYT1DkqEBsKQDfIF3SEiLzInG3RlzM5S4",
  authDomain: "car-system-9f25e.firebaseapp.com",
  projectId: "car-system-9f25e",
  storageBucket: "car-system-9f25e.firebasestorage.app",
  messagingSenderId: "342826468959",
  appId: "1:342826468959:web:264c4f39cb315a8e883dea"
};

export const app = initializeApp(firebaseConfig);