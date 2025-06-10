import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/topBtn/topBtn.css");

export function topBtn() {
    const top = document.createElement("span");
    top.className = "topSpan";

    const button = document.createElement("button");
    button.className = "button"
    button.addEventListener("click", () => {
        document.getElementById("nav").scrollIntoView({ behavior: "smooth" });
    });

    const icon = document.createElement("img");
    icon.src = "/src/img/topIcon.png";
    icon.alt = "Voltar ao topo"
    icon.title = "Voltar ao topo"
    icon.className = "topIcon";

    button.appendChild(icon);
    top.appendChild(button);

    return top;
}