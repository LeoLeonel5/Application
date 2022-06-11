import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB37UD7ibpQ5z_i8T1zQba93D7MZOrpis",
  authDomain: "flash-2c9d9.firebaseapp.com",
  projectId: "flash-2c9d9",
  storageBucket: "flash-2c9d9.appspot.com",
  messagingSenderId: "66488998641",
  appId: "1:66488998641:web:5ac122cd5c38a44dc1e750",
  measurementId: "G-0TW4WJMN1J"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export default db;

