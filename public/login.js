//instructor demo. Modify for our project
console.log("jspage")

const loginFormHandler = async (event) => {
  try{
  event.preventDefault();

  console.log("login")

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const results = await response.json()
    console.log(results)
    if (response.ok) {
      document.location.replace('/budget');
    } else {
      alert('Failed to log in');
    }
  }
}
catch(err){
  console.log(err)
}
};

const signupFormHandler = async (event) => {
  try{
  event.preventDefault();
console.log("signup")
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
console.log(name,email,password)
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
 const results = await response.json()
 console.log(results)
    if (response.ok) {
      document.location.replace('/budget');
    } else {
      alert(response.statusText);
    }
  }
}
catch(err){
  console.log(err)
}
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
