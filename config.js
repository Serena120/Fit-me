import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import "firebase/conpat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDJPeYNggzHLdAjtdlCFMmEeHA2hyAdRo",
    authDomain: "fir-auth-7c742.firebaseapp.com",
    projectId: "fir-auth-7c742",
    storageBucket: "fir-auth-7c742.appspot.com",
    messagingSenderId: "993975060565",
    appId: "1:993975060565:web:0b59060cba1d161ab0ecdc",
    measurementId: "G-6ZSR9C4Y33"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};