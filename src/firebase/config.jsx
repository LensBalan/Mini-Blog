import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwBGfima-Jl4Q6Z9BGe4zmTd_eIwySByw",
  authDomain: "miniblog-8ebfa.firebaseapp.com",
  projectId: "miniblog-8ebfa",
  storageBucket: "miniblog-8ebfa.firebasestorage.app",
  messagingSenderId: "1092379308834",
  appId: "1:1092379308834:web:ef8e12273289a0723dab7b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };