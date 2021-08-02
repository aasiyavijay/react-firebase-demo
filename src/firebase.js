import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyASiydVFQDcOnpzxjfJdMMci5mjNGVluyk",
  authDomain: "react-firebase-demo-66a60.firebaseapp.com",
  databaseURL: "https://react-firebase-demo-66a60-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-firebase-demo-66a60",
  storageBucket: "react-firebase-demo-66a60.appspot.com",
  messagingSenderId: "578046073675",
  appId: "1:578046073675:web:b8afc7af675c7a23a126ce"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;