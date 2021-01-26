import "./input.css";
import inputemail from "./input-email.html";
import inputpassword from "./input-password.html";


export default {
  title: "Components/input",
  parameters: { layout: "centered" },
};


export const inputmail = () => inputemail;
export const inputpw = () => inputpassword;
