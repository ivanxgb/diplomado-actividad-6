import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqJf2zeg6cBiW7ffnxUvms23HyzMJBOwg",
  authDomain: "users-diplomado.firebaseapp.com",
  projectId: "users-diplomado",
  storageBucket: "users-diplomado.appspot.com",
  messagingSenderId: "356499088117",
  appId: "1:356499088117:web:915c0107d411d56a479bbc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
