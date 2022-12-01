// import { showSection } from './dom.js';

import { showAboutPage, showHomePage } from "./home.js";
import { showCatalogPage } from "./catalog.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage} from './register.js'
// const main = document.querySelector("main");
document.querySelector("nav").addEventListener("click", onNavigate);

const sections = {
  homeBtn: showHomePage,
  catalogBtn: showCatalogPage,
  aboutBtn: showAboutPage,
  loginBtn: showLoginPage,
'registerBtn':showRegisterPage
};
// start application in home view
showHomePage();

function onNavigate(e) {
  if (e.target.tagName == "A") {
    const view = sections[e.target.id];
    if (typeof view == "function") {
      e.preventDefault();
      view();
    }
  }
}
