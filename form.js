function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate username (cannot be empty)
    if (username === "") {
        alert("Username cannot be empty.");
        return false;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password length (should be at least 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Validate confirm password (should match the password)
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass, show success message
    alert("Form is submitted successfully!");
    return true;  // Allows form submission
}
