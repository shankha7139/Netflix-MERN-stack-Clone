import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ0b6iYZDsUDR9H-VNbfV5M_qq8lEPyLA",
  authDomain: "react-netflix-clone-dbe9c.firebaseapp.com",
  projectId: "react-netflix-clone-dbe9c",
  storageBucket: "react-netflix-clone-dbe9c.appspot.com",
  messagingSenderId: "974914049400",
  appId: "1:974914049400:web:a6435acd2f13371df8248d",
  measurementId: "G-PGC4YJCNP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
