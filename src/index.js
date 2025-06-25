let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyForm = document.querySelector(".add-toy-form");

  // Toggle form visibility
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    toyFormContainer.style.display = addToy ? "block" : "none";
  });

  // Handle form submission
  toyForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    const name = event.target.name.value;
    const image = event.target.image.value;

    // POST to server
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
      })
    })
      .then(response => response.json())
      .then(newToy => {
        console.log("Toy added:", newToy);
        renderToyCard(newToy); // Show on the page
        toyForm.reset(); // Clear the form
      });
  });
});

