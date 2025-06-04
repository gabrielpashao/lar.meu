import { importStyle } from "../../../utils/import-css.js";
import { createButton } from "../button/button.js";
import { leftSide } from "../containers/leftSide.js";
import { rightSide } from "../containers/rightSide.js";

importStyle("/src/components/navbar/navbar.css");

const logo = document.createElement("img"); // Logo
logo.src = "/src/img/LogoColor.png";
logo.alt = "LAR.MEU";
logo.className = "logoNav";

const logoText = document.createElement("h1"); // Site name 
logoText.textContent = "LAR.MEU";

// Creating navbar buttons
const btnAbout = createButton("Sobre nós", () => {
    window.location.href = "sobre.html";
});

const btnServices = createButton("Nossos serviços", () => {
    window.location.href = "servicos.html";
});

const btnContact = createButton("Contato", () => {
    window.location.href = "contato.html";
});

const left = leftSide(); // Left division
const right = rightSide(); // Right division

// Function to create the navbar
export function createNavbar() {
    const nav = document.createElement("nav");
    nav.className = "nav";

    left.appendChild(logo);
    left.appendChild(logoText);

    right.appendChild(btnAbout);
    right.appendChild(btnServices);
    right.appendChild(btnContact);

    nav.appendChild(left);
    nav.appendChild(right);

    return nav;
}
