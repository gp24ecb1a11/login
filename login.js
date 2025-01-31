document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("button.w-full.bg-indigo-500");
    
    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulated authentication (Replace this with actual API call)
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
            window.location.href = "https://dormdash1.netlify.app/"; // Redirect to a dashboard page
        } else {
            alert("Invalid username or password. Try again.");
        }
    });
});
