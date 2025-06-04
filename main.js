import { createNavbar } from "./src/components/navbar/navbar.js";
import { createBanner } from "./src/components/banner/banner.js";

const header = document.createElement('header');
header.appendChild(createNavbar());
document.body.appendChild(header);

const main = document.createElement('main');
main.appendChild(createBanner());
document.body.appendChild(main);