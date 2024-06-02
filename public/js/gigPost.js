// Create a card for carasousel
const form = document.querySelector("#gigpostForm");
// console.log('Hello')
// console.log(form)

const submitGig = async (event) => {
  event.preventDefault();
  console.log("function");
  const company = document.querySelector("#company").value.trim();
  const title = document.querySelector("#title").value.trim();
  const technologies = document.querySelector("#technologies").value.trim();
  const budget = document.querySelector("#budget").value.trim();
  const contact_email = document.querySelector("#email").value.trim();
  const description = document.querySelector("#description").value.trim();

  console.log(company);
  console.log(title);
  console.log(technologies);
  console.log(budget);
  console.log(contact_email);
  console.log(description);
  //if statment
  // need to make fetch
  if (company && title && technologies && budget && contact_email && description) {
    const response = await fetch("/api/gigpost/gigPost", {
      method: "POST",
      body: JSON.stringify({
        company,
        title,
        technologies,
        budget,
        contact_email,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  }

};

form.addEventListener("submit", submitGig);
