const loginbtn = document.getElementById("loginbtn")
async function loginForm(e){
    e.preventDefault()
const email = document.getElementById("email").value
const password = document.getElementById("password").value

const response = await fetch("/api/users/login",{
method:"POST",
body:JSON.stringify({
    email,password
}),
headers:{'Content-Type':'application/json'}
})
console.log(response)
if (response.ok){
     window.location.replace('/gigpost')
}
else {
    alert("Something went wrong")
}
loginbtn.addEventListener("click",loginForm )
}

