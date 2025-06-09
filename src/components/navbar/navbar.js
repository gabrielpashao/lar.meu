import { importStyle } from "../../../utils/import-css.js";
import { createButton } from "../button/button.js";
import { leftSide } from "../containers/leftSide.js";
import { rightSide } from "../containers/rightSide.js";

importStyle("/src/components/navbar/navbar.css");

const logo = document.createElement("img"); // Logo
logo.src = "/src/img/LogoColor.png";
logo.alt = "LAR.MEU";
logo.className = "logoNav";

// Creating navbar buttons
const btnAbout = createButton("Sobre nós", () => {
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
});

const btnServices = createButton("Nossos serviços", () => {
    document.getElementById("servicos").scrollIntoView({ behavior: "smooth" });
});

const btnContact = createButton("Contato", () => {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
});

const left = leftSide(); // Left division
const right = rightSide(); // Right division

// Function to create the navbar
export function createNavbar() {
    const nav = document.createElement("nav");
    nav.className = "nav";

    left.appendChild(logo);

    right.appendChild(btnServices);
    right.appendChild(btnAbout);
    right.appendChild(btnContact);

    nav.appendChild(left);
    nav.appendChild(right);

    return nav;
}
