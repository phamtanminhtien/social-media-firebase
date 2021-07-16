import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firebase-firestore");
require("firebase/firebase-storage");

var firebaseConfig = {
  apiKey: "AIzaSyBhEuz25em8SJZ8gGNEBaXGy8Mzu6AigFk",
  authDomain: "social-media-1020a.firebaseapp.com",
  projectId: "social-media-1020a",
  storageBucket: "social-media-1020a.appspot.com",
  messagingSenderId: "631403397497",
  appId: "1:631403397497:web:7e6467fb7d7a1485dd2fa8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

auth.useEmulator("http://localhost:9099");
db.useEmulator("localhost", 8080);
storage.useEmulator("localhost", 9199);

export { auth, db, storage };
