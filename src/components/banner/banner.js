import { importStyle } from "../../../utils/import-css.js";

importStyle("/src/components/banner/banner.css");
importStyle("/src/components/navbar/navbar.css");

const bannerImg = document.createElement("div")
bannerImg.className = "bannerImg";

export function createBanner() {
    const banner = document.createElement("section");
    banner.className = "banner";

    banner.appendChild(bannerImg);
    return banner;
}