// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg0aV1ycvRpNLYayIYFS90YTkcvB6gxlQ",
  authDomain: "tripsandevents-a8b9c.firebaseapp.com",
  projectId: "tripsandevents-a8b9c",
  storageBucket: "tripsandevents-a8b9c.appspot.com",
  messagingSenderId: "103801543224",
  appId: "1:103801543224:web:2892e65823e1344e93e4cd",
  measurementId: "G-JHRBT8GZP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
const analytics = getAnalytics(app);
