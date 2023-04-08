import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMmEfqXds7CvsIcyqqP_vlTl9pqX7r7IE",
  authDomain: "sparkhacks-ef63a.firebaseapp.com",
  projectId: "sparkhacks-ef63a",
  storageBucket: "sparkhacks-ef63a.appspot.com",
  messagingSenderId: "240717736925",
  appId: "1:240717736925:web:423bb3b1e2ee5488582434",
  measurementId: "G-0YPKT1P1NM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export let currentUser = null;

export function register(email, password) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        currentUser = userCredential;
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function login(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        currentUser = userCredential;
        resolve(userCredential);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function addEvent(event) {
  // Add a new document with a generated id.
  await addDoc(collection(db, "events"), event);
}
