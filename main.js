import { createFooter } from "./src/components/footer/footer.js";
import { createNavbar } from "./src/components/navbar/navbar.js";
import { createBanner } from "./src/sections/banner/banner.js";
import { createServiceSection } from "./src/sections/serviços/servicos.js";
import { createAboutSection } from "./src/sections/sobre/sobre.js";
import { createValuesSection } from "./src/sections/valores/valores.js";

const header = document.createElement("header");
header.appendChild(createNavbar());
document.body.appendChild(header);

const main = document.createElement("main");
main.appendChild(createBanner());
main.appendChild(createServiceSection());
main.appendChild(createAboutSection());
main.appendChild(createValuesSection());
document.body.appendChild(main);

const footer = document.body.appendChild(createFooter());
