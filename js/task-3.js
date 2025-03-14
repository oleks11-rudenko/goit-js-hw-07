const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function showName(event) {
  nameInput.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  });
  nameOutput.innerHTML = event.target.value;
  if (nameOutput.innerHTML === "") {
    nameOutput.innerHTML = "Anonymous";
  }
}

nameInput.addEventListener("input", showName);
