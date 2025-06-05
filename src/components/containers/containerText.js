import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/containers/containerText.css");

export function containerText() {
    const container = document.createElement("div");
    container.className = "containerText";

    return container;
}

