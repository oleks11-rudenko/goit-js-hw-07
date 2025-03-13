const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const elements = document.querySelectorAll(".item ul");
const categories = document.querySelectorAll("h2");
const numberOfElements = elements.forEach((elem, index) => {
  console.log(`Category: ${categories[index].textContent}`);
  console.log(`Elements: ${elem.innerText.split("\n").length}`);
});
