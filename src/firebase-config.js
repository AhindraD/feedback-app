// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAtIs4vFY3OofAa_ZrWqGwNAIq-aSeFE4",
    authDomain: "feedback-app-ahindra.firebaseapp.com",
    projectId: "feedback-app-ahindra",
    storageBucket: "feedback-app-ahindra.appspot.com",
    messagingSenderId: "298747312866",
    appId: "1:298747312866:web:2a78e406aacbfb3768fcbb",
    measurementId: "G-M1DCVGNFC3",

    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://feedback-app-ahindra-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { database, auth };