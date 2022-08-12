// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
    measurementId: "G-M1DCVGNFC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);