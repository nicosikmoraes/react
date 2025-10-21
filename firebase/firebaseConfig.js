// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGr5bBPXmvvnpTiq4ncF7kosHtrny-ulc",
  authDomain: "fir-10bab.firebaseapp.com",
  projectId: "fir-10bab",
  storageBucket: "fir-10bab.firebasestorage.app",
  messagingSenderId: "40790430213",
  appId: "1:40790430213:web:6d81206137840de0c4026c",
  measurementId: "G-Y1TYFK4F97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
const analytics = getAnalytics(app);
