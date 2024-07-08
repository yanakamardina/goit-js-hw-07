const input = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}


function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    input.value = '';
    const divItems = [];
    for (let i = 0; i < amount; i++) {
      let boxSize = `${30 + (i * 10)}px`
      const newDiv = document.createElement("div");
      newDiv.style.width = boxSize;
      newDiv.style.height = boxSize;
      newDiv.style.background = getRandomHexColor();
      divItems.push(newDiv);
    }
    divBoxes.append(...divItems);
  }
}

btnCreate.addEventListener("click", () => createBoxes(Number(input.value)));
btnDestroy.addEventListener("click", destroyBoxes);