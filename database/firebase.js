
import firebase  from 'firebase/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE8z-argN5uUKckvJlhMUiuEpzqSgvy5I",
  authDomain: "fitsi-71aba.firebaseapp.com",
  projectId: "fitsi-71aba",
  storageBucket: "fitsi-71aba.appspot.com",
  messagingSenderId: "224374574619",
  appId: "1:224374574619:web:ec42ec0e9e533a197f32be"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
    firebase,
    db
}