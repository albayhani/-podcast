import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeftDaSulyNp7CQmO1KB9isfz5UdIJuIg",
  authDomain: "albayhani-podcast.firebaseapp.com",
  projectId: "albayhani-podcast",
  storageBucket: "albayhani-podcast.firebasestorage.app",
  messagingSenderId: "374492747630",
  appId: "1:374492747630:web:3990efa11a3cbe04e5d37f",
  measurementId: "G-4KGWT91P2Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
