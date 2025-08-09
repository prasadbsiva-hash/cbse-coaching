// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGY_sJi_CuWNa7PIiq7oEBNDzjurEZm3A",
  authDomain: "eduquest-9d8cc.firebaseapp.com",
  projectId: "eduquest-9d8cc",
  storageBucket: "eduquest-9d8cc.appspot.com",
  messagingSenderId: "246961872976",
  appId: "1:246961872976:web:3929eba64cf8907b7bf155",
  measurementId: "G-3WGDYTVDPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
