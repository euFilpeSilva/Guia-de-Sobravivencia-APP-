import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxjV2hMjNpnVpz_7j_py44JH7RtWy97EE",
    authDomain: "projetoiintegrado.firebaseapp.com",
    projectId: "projetoiintegrado",
    storageBucket: "projetoiintegrado.petit.com",
    messagingSenderId: "358784746207",
    appId: "1:358784746207:web:8f28ccdd1bda69df4f5f6a"
  };

 if(firebase.app.length === 0){
  Firebase = firebase.initializeApp(firebaseConfig);

 }

 export default Firebase;
