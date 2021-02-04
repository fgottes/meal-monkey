import { createElement } from "../../utils/createElement.js";

function createInputPassword() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLength: 1,
    min: 0,
    max: 9,
  });
}
export function createVerifyForm() {
  const pass1 = createInputPassword();
  const pass2 = createInputPassword();
  const pass3 = createInputPassword();
  const pass4 = createInputPassword();

  const messageElement = createElement("p", {
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We just send an OTP to your Mobile!",
      }),

      createElement("p", {
        innerText: "Please check your inbox (0174*****48)",
      }),
      messageElement,
      createElement("div", {
        className: "form__otp",
        children: [pass1, pass2, pass3, pass4],
      }),

      createElement("input", {
        type: "submit",
        value: "Enter",
        className: "btn",
      }),

      createElement("p", {
        innerText: "Din't receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();

      const password = `${pass1.value}${pass2.value}${pass3.value}${pass4.value}`;

      if (password === "2707") {
        messageElement.innerText = "Welcome User !";
      } else {
        messageElement.innerText = "GTFO of here...";
      }
    },
  });
}
