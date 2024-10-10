// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvNw2DI46xCTn38jUwExwsIeE_F4cuv0s",
  authDomain: "shopify-31d61.firebaseapp.com",
  projectId: "shopify-31d61",
  storageBucket: "shopify-31d61.appspot.com",
  messagingSenderId: "936276969295",
  appId: "1:936276969295:web:2b9136516c110ebf5ce73a",
  measurementId: "G-JDRLM2F5WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);