
console.log('Connected...')

const logoutBtn = document.querySelector('#logout');



const logoutFn = async (event) => {

    console.log("Submitting logout")
    await fetch('/api/users/logout', { method: 'POST' })
    window.location.replace('/');
}


logoutBtn.addEventListener('click', logoutFn);