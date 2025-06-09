import { createFooter } from "./src/components/footer/footer.js";
import { createNavbar } from "./src/components/navbar/navbar.js";
import { createBanner } from "./src/sections/banner/banner.js";
import { createServiceSection } from "./src/sections/serviços/servicos.js";
import { createAboutSection } from "./src/sections/sobre/sobre.js";
import { createValuesSection } from "./src/sections/valores/valores.js";
import { createContactSection } from "./src/sections/contato/contato.js";

const header = document.createElement("header");
header.appendChild(createNavbar());
document.body.appendChild(header);

const main = document.createElement("main");
main.appendChild(createBanner());
main.appendChild(createServiceSection());
main.appendChild(createAboutSection());
main.appendChild(createValuesSection());
main.appendChild(createContactSection());
document.body.appendChild(main);

const footer = document.body.appendChild(createFooter());

[...main.children].forEach(section => {
  section.classList.add("fade-in-section");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");  
      observer.unobserve(entry.target);       
    }
  });
}, { threshold: 0.1 });

[...main.children].forEach(section => {
  observer.observe(section);
});
