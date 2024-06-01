// Create a card for carasousel
const form = document.querySelector('#gigpostForm');
// console.log('Hello')
// console.log(form)


const submitGig = async (event) => {
    event.preventDefault();
    console.log('function')
    const company = document.querySelector('#company').value.trim();
    const technologies = document.querySelector('#technologies').value.trim();
    const budget = document.querySelector('#budget').value.trim();
    const email = document.querySelector('#email').value.trim();
    const description = document.querySelector('#description').value.trim();

    console.log(company);
    console.log(technologies);
    console.log(budget);
    console.log(email);
    console.log(description);

    //if statment
    // need to make fetch 

}

form.addEventListener('submit', submitGig);
