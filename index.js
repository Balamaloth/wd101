document.addEventListener('DOMContentLoaded', function() {
    // Load existing users from localStorage if available
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    function addUserToTable(user) {
      const userList = document.getElementById('userList');
      const newRow = userList.insertRow();
      newRow.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.password}</td><td>${user.dob}</td><td>${user.acceptedTerms ? 'Yes' : 'No'}</td>`;
    }
  
    function saveUserToLocalStorage(user) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  
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
    
      const newUser = { name, email, password, dob, acceptedTerms };
    
      addUserToTable(newUser);
      saveUserToLocalStorage(newUser);
    
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
  
    // Display existing users on page load
    users.forEach(addUserToTable);
  });
  
