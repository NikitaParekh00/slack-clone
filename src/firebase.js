import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV6uYWiMeIztgfY4FaDSmwP_9p52IkBmE",
  authDomain: "slack-clone-b75e8.firebaseapp.com",
  projectId: "slack-clone-b75e8",
  storageBucket: "slack-clone-b75e8.appspot.com",
  messagingSenderId: "336001136299",
  appId: "1:336001136299:web:533396f875a38074ab69ee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
