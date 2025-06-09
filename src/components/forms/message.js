import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/forms/message.css");

export function messageInput(title) {
    const messageInput = document.createElement("div");
    messageInput.className = "messageInput";

    const inputType = "message";

   const label = document.createElement("label");
    label.className = "label";
    label.htmlFor = title;
    label.textContent = title;

    const input = document.createElement("textarea");
    input.className = "inputMessage";
    input.name = inputType;

    messageInput.appendChild(label);
    messageInput.appendChild(input);

    return messageInput;
}