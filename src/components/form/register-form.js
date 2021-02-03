export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";
  button.className = "button";

  function register() {
    alert("f.gottesmann@outlook.com");
  }
  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const text = document.createElement("p");
  text.innerText =
    "Please enter your email to receive a link to create a new password via email";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Your email";
  input.className = "inputemail";

  form.append(title, text, input, button);

  return form;
}
