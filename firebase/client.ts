// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_b4TWnAeN7HkfGHznWAKmepYfWssfmZE",
  authDomain: "interview-13027.firebaseapp.com",
  projectId: "interview-13027",
  storageBucket: "interview-13027.firebasestorage.app",
  messagingSenderId: "781345353929",
  appId: "1:781345353929:web:9de931a36eff89b060dd18",
  measurementId: "G-F529HMHG41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);