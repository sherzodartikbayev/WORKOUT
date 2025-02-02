import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVBpCyCJ7szIMWAFOmn1MNkUTklDIqtS4",
  authDomain: "gym-training-1cfb8.firebaseapp.com",
  projectId: "gym-training-1cfb8",
  storageBucket: "gym-training-1cfb8.appspot.com",
  messagingSenderId: "336823853355",
  appId: "1:336823853355:web:2cc10264acce24dde9e56e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }