// Function to validate email address
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to calculate age from date of birth
function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Function to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;

  // Validate name
  const nameValidation = document.getElementById('nameValidation');
  if (name.trim() === '') {
    nameValidation.style.display = 'block';
    return; // Stop submission if name is empty
  } else {
    nameValidation.style.display = 'none';
  }

  // Validate email
  const emailValidation = document.getElementById('emailValidation');
  if (!validateEmail(email)) {
    emailValidation.style.display = 'block';
    return; // Stop submission if email is invalid
  } else {
    emailValidation.style.display = 'none';
  }

  // Validate password
  const passwordValidation = document.getElementById('passwordValidation');
  if (password.trim() === '') {
    passwordValidation.style.display = 'block';
    return; // Stop submission if password is empty
  } else {
    passwordValidation.style.display = 'none';
  }

  // Validate date of birth
  const dobValidation = document.getElementById('dobValidation');
  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    dobValidation.style.display = 'block';
    return; // Stop submission if age is invalid
  } else {
    dobValidation.style.display = 'none';
  }

  // Create table row with user data
  const newRow = `
    <tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td>${dob}</td>
      <td>${terms ? 'Yes' : 'No'}</td>
    </tr>
  `;

  // Append new row to table
  document.querySelector('#userTable tbody').insertAdjacentHTML('beforeend', newRow);

  // Clear form fields
  document.getElementById('registrationForm').reset();

  // Save data to local storage
  const userData = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    terms: terms
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});

// Load saved data from local storage on page load
window.addEventListener('load', function() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    const { name, email, password, dob, terms } = userData;
    const newRow = `
      <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms ? 'Yes' : 'No'}</td>
      </tr>
    `;
    document.querySelector('#userTable tbody').insertAdjacentHTML('beforeend', newRow);
  }
});
