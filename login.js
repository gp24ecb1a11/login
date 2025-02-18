import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeOS8_0tDWKnfAwLf0GRKr6JaopYj1nnY",
  authDomain: "dormdash-40a10.firebaseapp.com",
  projectId: "dormdash-40a10",
  storageBucket: "dormdash-40a10.appspot.com",
  messagingSenderId: "219135353050",
  appId: "1:219135353050:web:49446a2e74414ebf8105e3"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Login Function
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "https://dormdash1.netlify.app/"; // Redirect to Dashboard
    })
    .catch((error) => {
      alert("❌ Login failed! " + error.message);
    });
});
