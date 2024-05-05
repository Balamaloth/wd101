//function to validate the email
const validate = (email) => {
  if (email.validity.typeMismatch) {
      email.setCustomValidity("Please enter the right format email");
      email.reportValidity();
      return false;
  } else {
      email.setCustomValidity("");
  }
}

//function to validate the age
const validate_age = (dobInput) => {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const givendob = dobInput.value.split("-");
  const given_y = Number(givendob[0]);
  const given_m = Number(givendob[1]);
  const given_d = Number(givendob[2]);
  let age = y - given_y;
  if (m < given_m || (m === given_m && d < given_d)) {
      age -= 1;
  }
  if (age < 18 || age > 55) {
      dobInput.setCustomValidity("please make sure age is between 18 and 55");
      dobInput.reportValidity();
  } else {
      dobInput.setCustomValidity("");
  }
}

const get_userdetails = () => {
  let local_storage_details = localStorage.getItem("user_details");
  if (local_storage_details) {
      local_storage_details = JSON.parse(local_storage_details);
  } else {
      local_storage_details = [];
  }
  return local_storage_details;
}

//function to handle submit
const submitform = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const termsandconditions = document.getElementById('acceptedterms').checked;
  const pswd = document.getElementById('password').value;
  const user = {
      uname: name,
      uemail: email,
      udob: dob,
      utermsandconditions: termsandconditions,
      upswd: pswd
  }
  user_details.push(user);
  localStorage.setItem("user_details", JSON.stringify(user_details));
  fill_table();
}

const fill_table = () => {
  const details = get_userdetails();
  const user_table = document.getElementById('user-table');
  const user_table_html = details.map((user, index) => {
      return (`<tr class="border-2 border-blue-200">
      <td class="py-2 px-4 bg-blue-200">${user.uname}</td>
      <td class="py-2 px-4 bg-white">${user.uemail}</td>
      <td class="py-2 px-4 bg-blue-200">${user.upswd}</td>
      <td class="py-2 px-4 bg-white">${user.udob}</td>
      <td class="py-2 px-6 bg-blue-200">${user.utermsandconditions}</td>
      </tr>`)
  }).join("")
  user_table.innerHTML =
      `<table class="w-2/3 mx-auto my-8">
  <tr class="border-2 border-blue-200">
      <th class="py-2 px-4 bg-blue-600">Name</th>
      <th class="py-2 px-4 bg-blue-600">Email</th>
      <th class="py-2 px-4 bg-blue-600">Password</th>
      <th class="py-2 px-4 bg-blue-600">Dob</th>
      <th class="py-2 px-4 bg-blue-600">Accepted terms?</th>
  </tr>
  ${user_table_html} 
  </table>
  `;
}

let user_details = get_userdetails();
const email = document.getElementById("email");
const dob = document.getElementById("dob");
dob.addEventListener('input', () => validate_age(dob))
email.addEventListener('input', () => validate(email));
const submit = document.getElementById("reg-form");
submit.addEventListener('submit', submitform);
fill_table();
