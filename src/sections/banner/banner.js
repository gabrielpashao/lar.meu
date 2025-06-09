import { importStyle } from "../../../utils/import-css.js";
import { leftSide } from "../../components/containers/leftSide.js";
import { containerText } from "../../components/containers/containerText.js";

importStyle("/src/sections/banner/banner.css");

const bannerImg = document.createElement("div")
bannerImg.className = "bannerImg";

const bannerLogo = document.createElement("img")
bannerLogo.src = "/src/img/LogoColor.png";
bannerLogo.alt = "Logo LAR.MEU";
bannerLogo.className = "bannerLogo";

const logoText = document.createElement("h1"); // Site name 
logoText.textContent = "LAR.MEU";
logoText.className = "logoText";

const logoSubText = document.createElement("h3");
logoSubText.textContent = "Soluções em Engenharia";
logoSubText.className = "logoSubText";

const container = containerText();
const left = leftSide();

export function createBanner() {
    const banner = document.createElement("section");
    banner.className = "banner";

    container.appendChild(logoText);
    container.appendChild(logoSubText);

    left.appendChild(bannerLogo);
    left.appendChild(container);

    banner.appendChild(bannerImg)
    bannerImg.appendChild(left);

    return banner;
}