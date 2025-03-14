const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitLogin);

function submitLogin(event) {
  event.preventDefault();

  if (
    !event.target.elements.email.value ||
    !event.target.elements.password.value
  ) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim(),
  };

  console.log(formData);

  event.target.reset();
}
