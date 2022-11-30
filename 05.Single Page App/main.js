// import { showSection } from './dom.js';

import { showAboutPage, showHomePage } from "./home.js";
import { showCatalogPage } from "./catalog.js";
// const main = document.querySelector("main");
document.querySelector("nav").addEventListener("click", onNavigate);

const sections = {
  homeBtn: showHomePage,
  catalogBtn: showCatalogPage,
  aboutBtn: showAboutPage,
};
// start application in home view
showHomePage();

function onNavigate(e) {
  if (e.target.tagName == "A") {
      const view= sections[e.target.id];
      if(typeof view == 'function'){
        e.preventDefault();
          view()
      }
  }
}
