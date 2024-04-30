document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerBtn').addEventListener('click', function() {
        validateForm();
    });
});

function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Simple email validation (checking for @ symbol)
    if (email.indexOf('@') === -1) {
        alert('Please enter a valid email address');
        return false;
    }

    // Simple password length validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    // If all validations pass, you can submit the form or perform further actions
    alert('Registration successful!');
    // Here you can add code to submit the form or redirect to another page
}
