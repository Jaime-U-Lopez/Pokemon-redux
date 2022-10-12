import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDBe4nI_CYMdsYpqZ12J98PTONcF-d5_JE",
  authDomain: "tareas-crud-f52c5.firebaseapp.com",
  projectId: "tareas-crud-f52c5",
  storageBucket: "tareas-crud-f52c5.appspot.com",
  messagingSenderId: "629004332616",
  appId: "1:629004332616:web:18f242b2ffacaf4f9bf27d",
  measurementId: "G-EJDT5Y91TP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth= firebase.auth()
export { auth }
