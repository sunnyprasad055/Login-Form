import { initializeApp } from "firebase/app";
import firebase from './firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD1pjXwCAcDqV2GPO0UwNn_aMERQTL1lA8",
  authDomain: "employee-data-f79ab.firebaseapp.com",
  databaseURL: "https://employee-data-f79ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "employee-data-f79ab",
  storageBucket: "employee-data-f79ab.appspot.com",
  messagingSenderId: "699831842676",
  appId: "1:699831842676:web:6636741b839377e46a9e21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;