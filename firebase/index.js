import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAVsUqIvMHzLxIiUb6y-9LcRh33JdYjnpQ",
    authDomain: "proyecto1-b2021.firebaseapp.com",
    projectId: "proyecto1-b2021",
    storageBucket: "proyecto1-b2021.appspot.com",
    messagingSenderId: "519466416460",
    appId: "1:519466416460:web:a5203ad251697eec14b7e9",
    measurementId: "G-JRGQ9XE2KM"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const storage = getStorage(firebaseApp, "gs://proyecto1-b2021.appspot.com");

export { storage, app as default};