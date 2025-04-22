import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDxTwsadKZ8dfG-72UMXpQRMgEoKKismew",
    authDomain: "fir-eb5a3.firebaseapp.com",
    projectId: "fir-eb5a3",
    storageBucket: "fir-eb5a3.firebasestorage.app",
    messagingSenderId: "170131583400",
    appId: "1:170131583400:web:2eed6513029902de3c6d9d",
    measurementId: "G-HJ9LG6WMG7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage };
