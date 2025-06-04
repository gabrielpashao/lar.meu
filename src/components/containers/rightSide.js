import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/containers/rightSide.css");

// Right container division
export function rightSide() {
    const right = document.createElement("div"); 
    right.className = "right";

    return right;
}