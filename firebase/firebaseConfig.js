// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 Configurações do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGr5bBPXmvvnpTiq4ncF7kosHtrny-ulc",
  authDomain: "fir-10bab.firebaseapp.com",
  projectId: "fir-10bab",
  storageBucket: "fir-10bab.firebasestorage.app",
  messagingSenderId: "40790430213",
  appId: "1:40790430213:web:6d81206137840de0c4026c",
};

// ✅ Inicializa o app
const app = initializeApp(firebaseConfig);

// ✅ Inicializa o Firestore
const db = getFirestore(app);

export { db };
