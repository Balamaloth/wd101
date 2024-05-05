const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('entries');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;

  if (!isValidEmail(email)) {
    alert('Invalid email address');
    return;
  }

  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('You must be between 18 and 55 years old to register');
    return;
  }

  const entry = document.createElement('tr');
  entry.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${terms ? 'Yes' : 'No'}</td>
  `;
  tableBody.appendChild(entry);

  // Store data in local storage
  const userData = {
    name,
    email,
    password,
    dob,
    terms
  };
  localStorage.setItem(email, JSON.stringify(userData));

  form.reset();
});

// Load existing entries from local storage on page load
window.addEventListener('load', function() {
  for (let i = 0; i < localStorage.length; i++) {
    const email = localStorage.key(i);
    const userData = JSON.parse(localStorage.getItem(email));
    const entry = document.createElement('tr');
    entry.innerHTML = `
      <td>${userData.name}</td>
      <td>${userData.email}</td>
      <td>${userData.password}</td>
      <td>${userData.dob}</td>
      <td>${userData.terms ? 'Yes' : 'No'}</td>
    `;
    tableBody.appendChild(entry);
  }
});

function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

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
