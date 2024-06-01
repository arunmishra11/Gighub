// Create a card for carasousel
const form = document.querySelector("#gigpostForm");
// console.log('Hello')
// console.log(form)

const submitGig = async (event) => {
  event.preventDefault();
  console.log("function");
  const company = document.querySelector("#company").value.trim();
  const technologies = document.querySelector("#technologies").value.trim();
  const budget = document.querySelector("#budget").value.trim();
  const contact_email = document.querySelector("#email").value.trim();
  const description = document.querySelector("#description").value.trim();

  console.log(company);
  console.log(technologies);
  console.log(budget);
  console.log(contact_email);
  console.log(description);

  if (company && technologies && budget && contact_email && description) {
    const response = await fetch("/api/gigpost/gigPost", {
      method: "POST",
      body: JSON.stringify({
        company,
        technologies,
        budget,
        contact_email,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  }
  //if statment
  // need to make fetch
};

form.addEventListener("submit", submitGig);
