import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7SsdtC19M2HT3mJXtVJslWeOvNDBA274",
    authDomain: "clone-60fda.firebaseapp.com",
    projectId: "clone-60fda",
    storageBucket: "clone-60fda.appspot.com",
    messagingSenderId: "739174762590",
    appId: "1:739174762590:web:f807c8697433f5c3dacccf",
    measurementId: "G-124SJXHHPN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };