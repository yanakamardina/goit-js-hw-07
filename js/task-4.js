const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
};