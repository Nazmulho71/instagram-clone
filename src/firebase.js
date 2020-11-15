import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZDXIMzWn2sGVcKjPaM6XQ4pNWKEqTPFE",
  authDomain: "instagram-clone-32602.firebaseapp.com",
  databaseURL: "https://instagram-clone-32602.firebaseio.com",
  projectId: "instagram-clone-32602",
  storageBucket: "instagram-clone-32602.appspot.com",
  messagingSenderId: "401994534331",
  appId: "1:401994534331:web:e14be8270f7275a591089e",
  measurementId: "G-KM446QRV2S",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;
