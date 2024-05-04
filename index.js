document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('terms').checked;
  
    // Check if email is valid
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Check if age is between 18 and 55
    const dobDate = new Date(dob);
    const age = calculateAge(dobDate);
    if (age < 18 || age > 55) {
      alert('You must be between 18 and 55 years old to register.');
      return;
    }
  
    // Add user to table
    const userList = document.getElementById('userList');
    const newRow = userList.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptedTerms ? 'Yes' : 'No'}</td>`;
    
    // Clear form fields
    document.getElementById('registrationForm').reset();
  });
  
  // Function to check if email is valid
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to calculate age from date of birth
  function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
  
