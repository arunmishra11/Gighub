const loginbtn = document.getElementById("loginbtn");
async function loginForm(e) {
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
  console.log(response);
 // window.location.replace("/gigpost");
  if (response.ok) {
    window.location.replace("/gigPost");
   // window.location.replace("/test");
  } else {
    alert("Something went wrong");
    console.log(response.statusText);
  }
}
loginbtn.addEventListener("click", loginForm);
