const form = document.querySelector("#gigpostForm");

const submitGig = async (event) => {
  event.preventDefault();
  
  const company = document.querySelector("#company").value.trim();
  const title = document.querySelector("#title").value.trim();
  const technologies = document.querySelector("#technologies").value.trim();
  const budget = document.querySelector("#budget").value.trim();
  const contact_email = document.querySelector("#email").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (company && title && technologies && budget && contact_email && description) {
    try {
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
      
      console.log("Response status:", response.status);
      console.log("Response OK:", response.ok);

      if (response.ok) {
        // Redirect the user if response status is OK
        window.location.href = "/gigRepo";
      } else {
        console.error("Server responded with an error:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during fetch:", error);
    }
  } else {
    console.error("All fields are required.");
  }
};

form.addEventListener("submit", submitGig);
