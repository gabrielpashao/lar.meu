import { importStyle } from "../../../utils/import-css.js";
import { createCard } from "../../components/card/card.js";

importStyle("/src/sections/serviços/servicos.css");

const title = document.createElement("h1");
title.textContent = "Nossos serviços";
title.className = "titleText";

const cardSection = document.createElement("div");
cardSection.className = "cardSection";

const card1 = createCard("/src/img/projetosReformas.jpg", "Projetos e reformas", "<p>Personalizamos o seu novo lar, do seu jeito!</p>");
const card2 = createCard("/src/img/vistoriaEntrega.jpg", "Vistorias e entregas", "<p>Certificamos que tudo seja entregue como você merece.</p>");
const card3 = createCard("/src/img/servicosManutencao.jpg", "Serviços de manutenção", "<p>Garantimos estabilidade e vida útil prolongada da edificação.</p>");

export function createServiceSection() {
    const servicos = document.createElement("section");
    servicos.className = "servicos";
    servicos.id = "servicos"

    cardSection.appendChild(card1);
    cardSection.appendChild(card2);
    cardSection.appendChild(card3);

    servicos.appendChild(title);
    servicos.appendChild(cardSection);

    return servicos;
}