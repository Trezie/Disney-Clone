/*import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { firebase };
export { auth, provider, storage };
export default db;*/

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZbcpOycbcib9UoRSqWPtdTPWgLnbjmY",
  authDomain: "disney-clone-9400.firebaseapp.com",
  projectId: "disney-clone-9400",
  storageBucket: "disney-clone-9400.appspot.com",
  messagingSenderId: "621606874445",
  appId: "1:621606874445:web:41cd131d923e5d30195b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);*/

// Use these for db & auth

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;
//const db = getFirestore(app);

export const signIn = () => {
  auth.signInWithPopup(provider)
  .then((result)=>{
    console.log(result)
  })
}


export { auth, provider};
export default db;