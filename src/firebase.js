import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDluvP6pCJfmYfmUkceUL7jU5v2rIfjM4s",
  authDomain: "imessage-194b1.firebaseapp.com",
  databaseURL: "https://imessage-194b1.firebaseio.com",
  projectId: "imessage-194b1",
  storageBucket: "imessage-194b1.appspot.com",
  messagingSenderId: "91643797795",
  appId: "1:91643797795:web:8c8846b331a2997d466c96",
  measurementId: "G-VPJRZF61CF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
