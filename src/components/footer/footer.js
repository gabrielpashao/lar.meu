import { importStyle } from "../../../utils/import-css.js";
import { leftSide } from "../containers/leftSide.js";
import { rightSide } from "../containers/rightSide.js";
import { containerText } from "../containers/containerText.js";

importStyle("/src/components/footer/footer.css");

const logoFooter = document.createElement("img");
logoFooter.src = "/src/img/LogoColor.png";
logoFooter.alt = "LAR.MEU"
logoFooter.className = "logoFooter";

const logoTextFooter = document.createElement("h1");
logoTextFooter.className = "logoTextFooter";
logoTextFooter.textContent = "LAR.MEU";

const logoSubTextFooter = document.createElement("h3");
logoSubTextFooter.className = "logoSubTextFooter";
logoSubTextFooter.textContent = "Soluções em engenharia";

const containerLeft = containerText();
containerLeft.className = "containerTextLogo";

const containerRight = containerText();
containerRight.className = "containerTextAddress";

const address = document.createElement("div");
address.className = "addressText"
address.innerHTML = `
    <p>Av. João de Barros, Nº 1769</p>
    <p>Encruzilhada, Recife - Pernambuco</p> <br>
    <p>contato@larmeu.com.br</p>
    <p>(81) 3587-7893</p>
`;

const copyright = document.createElement("div");
copyright.className = "copyright";
copyright.innerHTML = `<p>© 2025 Gabriel Paixão / LAR.MEU. Todos os direitos reservados.</p>`;

const containerFooter = document.createElement("div");
containerFooter.className = "containerFooter";

const left = leftSide();
const right = rightSide();

export function createFooter() {
    const footer = document.createElement("footer")
    footer.className = "footer"

    containerLeft.appendChild(logoTextFooter);
    containerLeft.appendChild(logoSubTextFooter);
    containerRight.appendChild(address);

    left.appendChild(logoFooter);
    left.appendChild(containerLeft);
    right.appendChild(containerRight);

    containerFooter.appendChild(left);
    containerFooter.appendChild(right);

    footer.appendChild(containerFooter);
    footer.appendChild(copyright);

    return footer;
}