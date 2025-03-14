const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function showName(event) {
  nameOutput.innerHTML = event.target.value.trim();
  if (nameOutput.innerHTML === "") {
    nameOutput.innerHTML = "Anonymous";
  }
}

nameInput.addEventListener("input", showName);
