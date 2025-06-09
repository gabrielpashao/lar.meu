import { importStyle } from "../../../utils/import-css.js";
import { createCard } from "../../components/card/card.js";

importStyle("/src/sections/sobre/sobre.css");

const title = document.createElement("h1");
title.textContent = "Sobre nós";
title.className = "titleText";

const descriptionText = document.createElement("p");
descriptionText.className = "descriptionText";
descriptionText.innerHTML = `
    A construtora <strong class="strongText">LAR.MEU</strong> foi pensada e desenvolvida no intuito de atender
    exatamente as expectativas do cliente no quesito “se sentir em casa”; “se sentir no lar”,
    levando estabilidade para o edifício onde você reside, estética personalizada e confiança em todas as entregas.
`;

const description = document.createElement("div");
description.className = "description";

const imgAbout = document.createElement("img");
imgAbout.src = "/src/img/sobre.jpg";
imgAbout.alt = "Entrega do seu lar";
imgAbout.className = "imgAbout";

const content = document.createElement("div");
content.className = "content";

export function createAboutSection() {
    const sobre = document.createElement("section");
    sobre.className = "sobre";
    
    description.appendChild(descriptionText);
    description.appendChild(imgAbout);

    content.appendChild(description);

    sobre.appendChild(title);
    sobre.appendChild(content);

    return sobre;
}