document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  async function loginFormHandler(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location.replace("/gigPost");
    } else {
      alert("Something went wrong");
      console.log(response.statusText);
    }
  }

  loginForm.addEventListener("submit", loginFormHandler);
});
