import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO6XOUWCGYjHvrXgj3crXEOKVpo2CQLWY",
  authDomain: "sherzatsproject.firebaseapp.com",
  projectId: "sherzatsproject",
  storageBucket: "sherzatsproject.appspot.com",
  messagingSenderId: "195422218166",
  appId: "1:195422218166:web:8dbf9f77736a3959a40317",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
