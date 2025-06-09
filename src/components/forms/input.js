import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/forms/input.css");

export function labelInput(title, inputType) {
    const labelInput = document.createElement("div");
    labelInput.className = "labelInput";

    const label = document.createElement("label");
    label.className = "label";
    label.htmlFor = title;
    label.textContent = title;

    const input = document.createElement("input");
    input.className = "input";
    input.type = inputType;
    input.name = inputType;

    labelInput.appendChild(label);
    labelInput.appendChild(input);

    return labelInput;
}