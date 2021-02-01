import "./form.css";
import { createRegisterForm } from "./restiger-form";

export default {
    title: "Components/Form",
    parameters: { layout: "centered" },

};

export const register = () => createRegisterForm ();