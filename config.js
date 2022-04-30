import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_q6bwJrxEa5tvAGteytWZzzFf5Cjw9V8",
  authDomain: "project-71-3532f.firebaseapp.com",
  projectId: "project-71-3532f",
  storageBucket: "project-71-3532f.appspot.com",
  messagingSenderId: "555991144501",
  appId: "1:555991144501:web:2911135b5a5d6f4426f97c",
  measurementId: "G-2R5GKJZJQX"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
