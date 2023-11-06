// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGxgv76eqluHB9OqLG2TVernIm6hfKEYU",
  authDomain: "gig-grow.firebaseapp.com",
  projectId: "gig-grow",
  storageBucket: "gig-grow.appspot.com",
  messagingSenderId: "39639626007",
  appId: "1:39639626007:web:0807b96ce6724721fc0752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth