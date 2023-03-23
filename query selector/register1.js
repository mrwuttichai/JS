function run() {
  const firstNameInput = document.getElementById("fname");
  const lastNameInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      resetState(firstNameInput);
      resetState(lastNameInput);
      resetState(emailInput);
      resetState(passwordInput);

      validateFirstName(firstNameInput);
      validateLastName(lastNameInput);
      validateEmail(emailInput);
      validatePassword(passwordInput);
  });
}

function resetState(element) {
  const errorElement = element.parentElement.querySelector("#show-output");
  errorElement.innerHTML = ""; 
  element.classList.remove("invalid");
}

function displayError(element, message) {
  const errorElement = element.parentElement.querySelector("#show-output");
  errorElement.innerHTML = message; 
  element.classList.add("invalid");
}

function validatePassword(element) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passwordRegex.test(element.value)){ 
      displayError(element, "Password with at least 8 characters, one uppercase letter, one lowercase letter, and one digit");
  }
}

function validateEmail(element) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(element.value)) {
      displayError(element, "Email format invalid")
  }
}

function validateFirstName(element) {
  const regex = /\S/;
  if (!regex.test(element.value)) {
      displayError(element, "First name is required");
  } 
}

function validateLastName(element) {
  const regex = /\S/;
  if (!regex.test(element.value)) {
      displayError(element, "Last name is required");
  }
}

run();