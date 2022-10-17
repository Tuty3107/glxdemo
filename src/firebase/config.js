import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBta7q4B3iBb6Sru-xLrQHuoyIFIF1fLCI",
  authDomain: "fir-47a5d.firebaseapp.com",
  projectId: "fir-47a5d",
  storageBucket: "fir-47a5d.appspot.com",
  messagingSenderId: "283658302111",
  appId: "1:283658302111:web:006fcafe1290a0315068aa",
  measurementId: "G-N7H6J792H2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, 'localhost', 8080);

export { db, auth };
export default app;