// import { showSection } from './dom.js';

import { showAboutPage, showHomePage } from "./home.js";
import { showCatalogPage } from "./catalog.js"
// const main = document.querySelector("main");
document.querySelector("nav").addEventListener("click", onNavigate);

// start application in home view 
showHomePage();

function onNavigate(e) {
  if (e.target.tagName == "BUTTON") {
    switch (e.target.id) {
      case "homeBtn":
        showHomePage()
        break;
      case "catalogBtn":
        showCatalogPage();
        break;
      case "aboutBtn":
        showAboutPage()
        break;
    }
  }
}
