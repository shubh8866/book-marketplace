let currentUser = localStorage.getItem("currentUser");

function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Enter username & password");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username]) {
        alert("User already exists!");
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] === password) {
        localStorage.setItem("currentUser", username);
        document.getElementById("auth-status").innerText = "Logged in as " + username;
        alert("Login successful!");
    } else {
        alert("Invalid credentials");
    }
}