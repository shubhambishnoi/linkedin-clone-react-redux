// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB2ZRQQ2QVHSM3P76knFYJFQH9mRcTGP_k",
    authDomain: "linkedin-clone-reactjs-redux.firebaseapp.com",
    projectId: "linkedin-clone-reactjs-redux",
    storageBucket: "linkedin-clone-reactjs-redux.appspot.com",
    messagingSenderId: "375920515644",
    appId: "1:375920515644:web:136daaaabe708125808139",
    measurementId: "G-FSPR59HS14"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}