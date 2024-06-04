const signupForm = document.querySelector("#signupForm");


// Function to add new user information

const signupFunction = async function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  console.log(firstName, lastName, email, password);

  if (firstName && lastName && email && password) {
    const name = firstName + " " + lastName;
    // fetch
    const res = await fetch("/api/users/",{
        method: 'POST',
        body: JSON.stringify({
          name,email,password
        }),
        headers: {"Content-Type":"application/json"}
    } )
    if (res.ok) {
      window.location.replace("/");
    } else {
      alert("Something went wrong");
      console.log(res.statusText);
    }
  
  }
};



signupForm.addEventListener("submit", signupFunction);
