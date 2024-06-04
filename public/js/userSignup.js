const signupFormHandler = async (event) => {
    event.preventDefault();
  // need username to concatenate first and last name
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const password2 = document.querySelector('#password2-signup').value.trim();
  
    //need function to check if passwords match, if they don't display an alert that they don't match

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };