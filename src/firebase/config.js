import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDh7oSehUb8KiQnHN9-11h30jKhj1OSrgU",
    authDomain: "ninja-firegram-1b073.firebaseapp.com",
    projectId: "ninja-firegram-1b073",
    storageBucket: "ninja-firegram-1b073.appspot.com",
    messagingSenderId: "529458447246",
    appId: "1:529458447246:web:58f5efbae039f3922b9adf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage =firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp; 

  export {projectStorage, projectFirestore, timestamp};
