// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
}from 'firebase/auth';


import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0YyaiKsaBh-dDWmqa50HRiUffJJtgQZM",
  authDomain: "disney-plus-clone-31443.firebaseapp.com",
  projectId: "disney-plus-clone-31443",
  storageBucket: "disney-plus-clone-31443.appspot.com",
  messagingSenderId: "672225686787",
  appId: "1:672225686787:web:e99d8202cfe1d582ed2536",
  measurementId: "G-CZYXTRKQKS"
};

// Initialize Firebase

initializeApp(firebaseConfig)

//auth
const auth = getAuth();

//google auth provider
const provider = new GoogleAuthProvider();

//init service
const db=getFirestore()

//collection ref
const colref =collection(db,'movies')



export {collection,getDoc,getFirestore,onSnapshot,setDoc,getDocs,doc,db,colref,auth,provider}