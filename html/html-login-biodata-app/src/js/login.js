// This file contains JavaScript functions to handle the login process, including validation of the entered credentials and redirection to the profile page upon successful login.

const validCredentials = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" }
];

function validateLogin(username, password) {
    return validCredentials.some(credential => 
        credential.username === username && credential.password === password
    );
}

document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validateLogin(username, password)) {
        window.location.href = "profile.html"; // Redirect to profile page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});