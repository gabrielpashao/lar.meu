import { importStyle } from "../../../utils/import-css.js";
import { labelInput } from "../../components/forms/input.js";
import { messageInput } from "../../components/forms/message.js";
import { createButton } from "../../components/button/button.js";

importStyle("/src/sections/contato/contato.css");

const title = document.createElement("h1");
title.className = "titleText";
title.textContent = "Fale conosco!";

const formSection = document.createElement("div");
formSection.className = "formSection";

const forms = document.createElement("form");
forms.action = "#";
forms.method = "POST";

const logoMono = document.createElement("img");
logoMono.src = "/src/img/LogoMono.png";
logoMono.className = "logoMono";

const nameInput = labelInput("Nome", "text");
const emailInput = labelInput("Email", "email");
const message = messageInput("Mensagem");
const submitBtn = createButton("Enviar");

export function createContactSection() {
    const contato = document.createElement("section");
    contato.className = "contato";
    contato.id = "contato";

    forms.appendChild(nameInput);
    forms.appendChild(emailInput);
    forms.appendChild(message);
    forms.appendChild(submitBtn);

    formSection.appendChild(title);
    formSection.appendChild(forms);

    contato.appendChild(formSection);
    contato.appendChild(logoMono);

    return contato;
}