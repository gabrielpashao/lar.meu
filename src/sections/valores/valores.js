import { importStyle } from "../../../utils/import-css.js";
import { createCard } from "../../components/card/card.js";

importStyle("/src/sections/valores/valores.css");

const title = document.createElement("h1");
title.textContent = "Valores";
title.className = "titleTextValues";

const proposito = `<p>Entregar serviços na área da construção civil, que visam a estabilidade, a qualidade nos processos e a satisfação dos proprietários;</p>`;

const visao = `<p>Ser uma organização reconhecida no mercado pelo excelente trabalho, que garante eficiência e qualidade;</p>`;

const principios = `
    <ul>
        <li><p><strong class="strongText">FOCO</strong> no cliente;</p></li>
        <li><p>Relacionamento personalizado e <strong class="strongText">único</strong>;</p></li>
        <li><p>Estabilidade, confiança e <strong class="strongText">qualidade no serviço</strong>;</p></li>
        <li><p>Precisão técnica na supervisão.</p></li>
    </ul>
`;

const card4 = createCard("/src/img/proposito.png", "Propósito", proposito)
const card5 = createCard("/src/img/visao.png", "Visão", visao);
const card6 = createCard("/src/img/principios.png", "Princípios", principios);

const values = document.createElement("div");
values.className = "values";

export function createValuesSection() {
    const valores = document.createElement("section");
    valores.className = "valores";

    values.appendChild(card4);
    values.appendChild(card5);
    values.appendChild(card6);

    valores.appendChild(title);
    valores.appendChild(values);

    return valores;
}