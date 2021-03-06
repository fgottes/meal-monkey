import { createElement } from "../../utils/createElement.js";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: 1,
  });
  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "form__otp",
    children: [otpOne, otpTwo, otpThree, otpFour],
  });

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const secretPassword = "3217";

    if (
      `${otpOne.value}${otpTwo.value}${otpThree.value}${otpFour.value}` ===
      secretPassword
    ) {
      alert(
        `Your OTP - ${otpOne.value}${otpTwo.value}${otpThree.value}${otpFour.value}- is correct`
        // "Your OTP - " + otpOne.value + otpTwo.value + otpThree.value +otpFour.value + "- is correct"
      );
    } else {
      alert("Your input was incorrect - Please try again!");
    }
  });

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
