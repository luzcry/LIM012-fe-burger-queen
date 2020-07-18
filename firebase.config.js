import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyAxARIZ94mG6YJ9fQLZbNTzFk2PMJQYIRQ",
  authDomain: "valhallasburger.firebaseapp.com",
  databaseURL: "https://valhallasburger.firebaseio.com",
  projectId: "valhallasburger",
  storageBucket: "valhallasburger.appspot.com",
  messagingSenderId: "20133251045",
  appId: "1:20133251045:web:401f9366092588bd09910c",
  measurementId: "G-Y56MDJK74T"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("Users");
const clientsCollection = db.collection("Clients");

// export utils/refs
export { db, auth, usersCollection, clientsCollection };
