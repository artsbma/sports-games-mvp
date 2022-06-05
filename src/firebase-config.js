// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGf0cpdjN8EKJhy3rDDTsYv-5Gnz0ra7g",
  authDomain: "sport-mvp.firebaseapp.com",
  projectId: "sport-mvp",
  storageBucket: "sport-mvp.appspot.com",
  messagingSenderId: "99535081216",
  appId: "1:99535081216:web:5a0d22258ac70475822de5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

