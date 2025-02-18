// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDobwvOdyiwBCjNNBUyRNStwrMQmhFv3vY",
  authDomain: "dormdash-1becd.firebaseapp.com",
  databaseURL: "https://dormdash-1becd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dormdash-1becd",
  storageBucket: "dormdash-1becd.firebasestorage.app",
  messagingSenderId: "789434000901",
  appId: "1:789434000901:web:a8f28358c7e0091b2ede6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login event listener
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard or home page
        })
        .catch((error) => {
            alert(error.message);
        });
});
