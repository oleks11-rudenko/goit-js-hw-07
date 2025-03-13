const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const tempList = [];
const elements = document.querySelectorAll(".item ul");
const numberOfElements = elements.forEach((element) =>
  tempList.push(element.innerText.split("\n"))
);

const categories = document.querySelectorAll("h2");
const result = categories.forEach((elem, index) => {
  console.log(`Category: ${elem.textContent}`);
  console.log(`Elements: ${tempList[index].length}`);
});
