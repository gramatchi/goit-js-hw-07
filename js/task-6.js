function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const outputAreaRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  outputAreaRef.innerHTML = "";
}

function onCreateBtnClick() {
  if (inputRef.value > 0 && inputRef.value < 101) {
    outputAreaRef.innerHTML = "";
    createBoxes(inputRef.value);
  }
}

function createBoxes(amount) {
  let markup = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    size += 10;
    const color = getRandomHexColor();
    markup += `<div class="box" style="background-color: ${color}; height: ${size}px; width: ${size}px;"></div>`;
  }
  outputAreaRef.innerHTML = markup;
  inputRef.value = "";
}
