// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYRRwrFUCqVSnyIkHMuAGR-hrGZW4LKb4",
    authDomain: "todo-app-2ad58.firebaseapp.com",
    projectId: "todo-app-2ad58",
    storageBucket: "todo-app-2ad58.appspot.com",
    messagingSenderId: "26005307012",
    appId: "1:26005307012:web:7b84fa0e805b6e609bccd1",
    measurementId: "G-LFWDM9YETH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);