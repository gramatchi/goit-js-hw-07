function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");

btnRef.addEventListener("click", (e) => {
  e.preventDefault();
  const color = getRandomHexColor();
  spanRef.textContent = `${color}`;
  bodyRef.style.backgroundColor = color;
});
