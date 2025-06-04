import { importStyle } from "../../../utils/import-css.js";

importStyle('/src/components/button/button.css');

export function createButton(text, event) {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = text;
    button.addEventListener('click', event);
    return button;
} 