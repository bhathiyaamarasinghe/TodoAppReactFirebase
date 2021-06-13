import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyCwFFCH6YCQUAszL44A1LjV3wWSrc8eBNI",
    authDomain: "todoapp-2fd72.firebaseapp.com",
    projectId: "todoapp-2fd72",
    storageBucket: "todoapp-2fd72.appspot.com",
    messagingSenderId: "474053820335",
    appId: "1:474053820335:web:3e17b8c9a601eb416e395a"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{db};