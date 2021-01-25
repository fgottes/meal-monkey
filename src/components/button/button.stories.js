import "./button.css";
import borderbutton from "./borderbutton.html";
import textbutton from "./textbutton.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const text = () => textbutton;
export const border = () => borderbutton;
