import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/card/card.css");

export function createCard(imgSrc, title, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "imgCard";
    img.src = imgSrc;
    img.alt = title;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "cardTitle";
    cardTitle.textContent = title;

    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = description;

    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";
    
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(content);

    card.appendChild(img);
    card.appendChild(cardContent);
    
    return card;
}