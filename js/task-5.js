function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", changeBodyAndTextColor);

function changeBodyAndTextColor() {
  const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  textColor.textContent = randColor;
}

// style="background-color: ;
