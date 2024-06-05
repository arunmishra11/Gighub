document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  async function loginFormHandler(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/gigPost");
    } else {
      alert("Something went wrong");
      console.log(response.statusText);
    }
  }

  async function signupFormHandler(e) {
    e.preventDefault();
    
    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    console.log(firstName, lastName, email, password);

    if (firstName && lastName && email && password) {
      const name = `${firstName} ${lastName}`;
      console.log(name);
      
      const response = await fetch("/api/users/", {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        window.location.replace("/");
      } else {
        alert("Something went wrong");
        console.log(response.statusText);
      }
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", loginFormHandler);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", signupFormHandler);
  }
});
