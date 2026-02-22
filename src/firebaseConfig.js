import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUZOnwWu8-k8bfvxJZUVBTjZTCz3dZudc",
  authDomain: "webapp-dashboard-3500a.firebaseapp.com",
  projectId: "webapp-dashboard-3500a",
  storageBucket: "webapp-dashboard-3500a.firebasestorage.app",
  messagingSenderId: "966590014701",
  appId: "1:966590014701:web:e134d1eba6309973c4d8e4"
};



// 4f3726e618df22d1e07e4c739233b349c2b96b72
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Attempt anonymous sign-in so uploads work when Storage rules require authentication.
signInAnonymously(auth).catch((err) => {
  // Not fatal; if anonymous sign-in fails, uploads may still fail depending on rules.
  // Log for visibility.
  // eslint-disable-next-line no-console
  console.warn("Anonymous sign-in failed:", err);
});

export { db, storage, auth };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);