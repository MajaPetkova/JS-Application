// import { showSection } from './dom.js';

import { showAboutPage, showHomePage } from "./views/home.js";
import { showCatalogPage } from "./views/catalog.js";
import { showLoginPage } from "./views/login.js";
import { showRegisterPage } from "./views/register.js";
import { logout } from "./api/data.js";
import { showSection} from './dom.js'

// const main = document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", onLogout);
document.querySelector("nav").addEventListener("click", onNavigate);

const views={
  home: showHomePage,
  catalog: showCatalogPage,
  about: showAboutPage,
  login: showLoginPage,
  register: showRegisterPage
}
const links = {
  homeBtn: 'home',
  catalogBtn: 'catalog',
  aboutBtn: 'about',
  loginBtn: 'login',
  registerBtn: 'register',
};
updateUserNav();

const ctx = {
  updateUserNav,
  goto,
  showSection
};
// start application in home view
goto('home')

function onNavigate(e) {
  if (e.target.tagName == "A") {
    const name = links[e.target.id];
    if(name){
      e.preventDefault();
      goto(name)
    }
  }
}
function goto(name, ...params){
  const view= views[name];
  if (typeof view == "function") {
    view(ctx, ...params);
  }
}
export function updateUserNav() {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData != null) {
    document.querySelector(".userNav").style.display = "inline-block";
    document.querySelector(".guestNav").style.display = "none";
  } else {
    document.querySelector(".guestNav").style.display = "inline-block";
    document.querySelector(".userNav").style.display = "none";
  }
}
async function onLogout(event) {
  event.stopImmediatePropagation();
  await logout();

  updateUserNav();
  goto('home')
}
