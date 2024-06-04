const signupForm = document.querySelector("#signupForm");


//function to add new user information

const signupFunction = async function (event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  console.log(firstName, lastName, email, password);

  if (firstName && lastName && email && password) {
    const name = firstName + " " + lastName;
    console.log(name);
    //fetch
    const res = await fetch("/api/users/ ",{
        method: 'POST',
        body:
        Headers:
    } )
  }
};



signupForm.addEventListener("submit", signupFunction);
