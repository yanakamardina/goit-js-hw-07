const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const messageHi = (evt) => {
    const value = evt.currentTarget.value.trim();

    if (!value) {
      output.textContent = "Anonymous";
    } else {
      output.textContent = value;
    }
};

textInput.addEventListener("input", messageHi);   

