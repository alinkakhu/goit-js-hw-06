function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");

const changeColorEl = document.querySelector(".change-color");

const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", function () {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();

});

