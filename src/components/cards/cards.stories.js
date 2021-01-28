import "./cards.css";
import cardAfrican from "./card-african.html";
import cardAmerican from "./card-american.html";
import cardSpanish from "./card-spanish.html";
import cardContainer from "./card-container.html";


export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const african = () => cardAfrican;
export const american = () => cardAmerican;
export const spanish = () => cardSpanish;
export const multiple = () => cardContainer;
multiple.parameters={layout:"fullscreen"};
