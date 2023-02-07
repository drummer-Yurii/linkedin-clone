import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB75IIs83gDrHrNekOdGOtp_6NInrHowgA",
    authDomain: "linkedin-clone-be07a.firebaseapp.com",
    projectId: "linkedin-clone-be07a",
    storageBucket: "linkedin-clone-be07a.appspot.com",
    messagingSenderId: "891191677935",
    appId: "1:891191677935:web:ee6495f1af49a0ff319c1a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;