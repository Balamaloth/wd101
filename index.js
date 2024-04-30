document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const terms = document.getElementById("terms").checked ? "Yes" : "No";

        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email address");
            return;
        }

        // Calculate age
        const today = new Date();
        const birthDate = new Date(dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Check age limits
        if (age < 18 || age > 55) {
            alert("Age must be between 18 and 55");
            return;
        }

        // Add entry to table
        const newRow = table.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;

        // Clear form
        form.reset();
    });
});
