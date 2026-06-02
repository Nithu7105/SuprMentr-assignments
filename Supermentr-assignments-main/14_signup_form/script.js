const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    // Clear messages
    document.getElementById("userError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passError").textContent = "";
    document.getElementById("successMsg").textContent = "";

    // Username validation
    if (username.length < 3) {
        document.getElementById("userError").textContent = "Minimum 3 characters required";
        valid = false;
    }

    // Email validation (regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    // Password validation
    let passPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!password.match(passPattern)) {
        document.getElementById("passError").textContent =
            "Password must have 1 uppercase, 1 number, min 6 chars";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("successMsg").textContent = "Signup Successful!";
    }
    if (password !== confirmPassword) {
    error = "Passwords do not match";
}
});