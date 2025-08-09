import { auth } from './firebase-init.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const logoutLink = document.getElementById('logout-link');
const logoutButton = document.getElementById('logout-button');

// --- Auth State Observer ---
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is logged in:', user.email);
    loginLink.classList.add('hidden');
    signupLink.classList.add('hidden');
    logoutLink.classList.remove('hidden');
  } else {
    console.log('User is logged out.');
    loginLink.classList.remove('hidden');
    signupLink.classList.remove('hidden');
    logoutLink.classList.add('hidden');
  }
});

// --- Signup Form ---
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Signup successful for:', userCredential.user.email);
        window.location.href = 'index.html';
      })
      .catch(error => {
        console.error('Signup failed:', error.message);
        alert(`Signup failed: ${error.message}`);
      });
  });
}

// --- Login Form ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Login successful for:', userCredential.user.email);
        window.location.href = 'index.html';
      })
      .catch(error => {
        console.error('Login failed:', error.message);
        alert(`Login failed: ${error.message}`);
      });
  });
}

// --- Logout Button ---
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
      console.log('Logout successful.');
      window.location.href = 'index.html';
    }).catch(error => {
      console.error('Logout failed:', error.message);
      alert(`Logout failed: ${error.message}`);
    });
  });
}
