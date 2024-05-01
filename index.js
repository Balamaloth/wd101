const form = document.getElementById('registration-form');
const table = document.getElementById('user-table').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const dob = form.elements['dob'].value;
  const termsAccepted = form.elements['terms'].checked;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const age = calculateAge(new Date(dob));
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55 years.');
    return;
  }

  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${termsAccepted ? 'Yes' : 'No'}</td>
  `;

  form.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function calculateAge(birthday) { 
  const ageDifferenceMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifferenceMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
