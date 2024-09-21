import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyALbo2ZV-6PVRSYI6Qz-gFPKzC5tEngyv8",
    authDomain: "adjence-399aa.firebaseapp.com",
    projectId: "adjence-399aa",
    storageBucket: "adjence-399aa.appspot.com",
    messagingSenderId: "227885865613",
    appId: "1:227885865613:web:df6aab6e0b192d02e4e0c4",
    measurementId: "G-P1PJMYGCHJ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);



export { db,storage };
