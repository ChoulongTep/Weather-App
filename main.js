// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5fYQL7lzusWEj4r2Lsv6hUJDe7YOa15E",
  authDomain: "weather-app-free.firebaseapp.com",
  projectId: "weather-app-free",
  storageBucket: "weather-app-free.appspot.com",
  messagingSenderId: "138535465111",
  appId: "1:138535465111:web:625cb75d58437dcffeb9d2",
  measurementId: "G-LP7VF39L7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);