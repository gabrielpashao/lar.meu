import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/containers/leftSide.css");

// Left container division
export function leftSide() {
    const left = document.createElement("div"); 
    left.className = "left";
    
    return left;
}