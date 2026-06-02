const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Minimum 6 characters required";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
    }
});