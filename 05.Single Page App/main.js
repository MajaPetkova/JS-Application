// import { showSection } from './dom.js';

import { showAboutPage, showHomePage } from "./home.js";
import { showCatalogPage } from "./catalog.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";
// const main = document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", onLogout);
document.querySelector("nav").addEventListener("click", onNavigate);
const sections = {
  homeBtn: showHomePage,
  catalogBtn: showCatalogPage,
  aboutBtn: showAboutPage,
  loginBtn: showLoginPage,
  registerBtn: showRegisterPage,
};
updateUserNav();
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

  // const userData= sessionStorage.getItem('userData');
  const { token } = JSON.parse(sessionStorage.getItem("userData"));
  await fetch("http://localhost:3030/users/logout", {
    headers: {
      "X-Authorization": "token",
    },
  });
  sessionStorage.removeItem("userData");
  updateUserNav();
  showHomePage()
}
