import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIAJzK_Vz15MR-tbCL6goIB7MoEq6NPcw",
    authDomain: "redux-firebase-d22af.firebaseapp.com",
    projectId: "redux-firebase-d22af",
    storageBucket: "redux-firebase-d22af.appspot.com",
    messagingSenderId: "971546393243",
    appId: "1:971546393243:web:d6079b9ae5ab080b1e643e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider,firebaseApp};