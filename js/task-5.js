const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");


function ChangeColor() {
  let finalColor = getRandomHexColor()
  body.style.background = finalColor;
  spanColor.textContent = finalColor;
}

btnChangeColor.addEventListener("click", ChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
