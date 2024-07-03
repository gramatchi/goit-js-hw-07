const numberOfCategoriesRel = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategoriesRel.length}`);

const h2Categories = document.querySelectorAll(".item h2");

h2Categories.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  const lengthOf = element.nextElementSibling.children.length;
  console.log(`Elements: ${lengthOf}`);
});
