// Create a card for carasousel
console.log('Connected...')
//const form = document.querySelector('#gigpostForm');
const logoutBtn = document.querySelector('#logout');
// console.log('Hello')
// console.log(form)


const logoutFn = async (event) => {
    /*
    event.preventDefault();
    console.log('function')
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    */
    console.log("Submitting logout")
    await fetch('/api/users/logout', { method: 'POST' })
    window.location.replace('/');
}

// form.addEventListener('submit', submitGig);
logoutBtn.addEventListener('click', logoutFn);