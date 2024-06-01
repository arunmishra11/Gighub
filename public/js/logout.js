// Create a card for carasousel
const form = document.querySelector('#gigpostForm');
// console.log('Hello')
// console.log(form)


const submitGig = async (event) => {
    event.preventDefault();
    console.log('function')
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();


}

form.addEventListener('submit', submitGig);