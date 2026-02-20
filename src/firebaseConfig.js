import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDUZOnwWu8-k8bfvxJZUVBTjZTCz3dZudc",
  authDomain: "webapp-dashboard-3500a.firebaseapp.com",
  projectId: "webapp-dashboard-3500a",
  storageBucket: "webapp-dashboard-3500a.firebasestorage.app",
  messagingSenderId: "966590014701",
  appId: "1:966590014701:web:e134d1eba6309973c4d8e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage };
