import { importStyle } from "../../../utils/import-css.js";
import { leftSide } from "../containers/leftSide.js";
import { rightSide } from "../containers/rightSide.js";

importStyle("/src/components/footer/footer.css");

const left = leftSide();
const right = rightSide();

export function createFooter() {
    const footer = document.createElement("footer")
    footer.className = "footer"


    return footer;
}