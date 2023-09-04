// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh6MpIVUALBnZCFvVJ5PWQ7PuDTlLNp98",
  authDomain: "portfolio-a7269.firebaseapp.com",
  projectId: "portfolio-a7269",
  storageBucket: "portfolio-a7269.appspot.com",
  messagingSenderId: "176563599356",
  appId: "1:176563599356:web:2d6e5f0aa444a4fd822479",
  measurementId: "G-2F2HCMWDVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);
