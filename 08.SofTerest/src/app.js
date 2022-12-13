// import * as api from './api/data.js';
// window.api= api;

import { showCatalogPage } from "../views/catalog.js";
import { showCreatePage } from "../views/create.js";
import { showDetailsPage } from "../views/details.js";
import { showHomePage } from "../views/home.js";
import { showLoginPage } from "../views/login.js";
import { showRegisterPage } from "../views/register.js";
import { showView } from "../views/dom.js"

const links = {
  homeLink: "home",
  getStartedLink: "home",
  catalogLink: "catalog",
  loginLink: "login",
  registerLink: "register",
  createLink: "create",
};

const views = {
  home: showHomePage,
  catalog: showCatalogPage,
  login: showLoginPage,
  register: showRegisterPage,
  create: showCreatePage,
  details: showDetailsPage,
};
const nav = document.querySelector("nav");
nav.addEventListener("click", onNavigate);

const ctx = {
  goTo,
  showView,
};
//Start application in home view
goTo('home');


function onNavigate(ev) {
  const name = links[ev.target.id];
  if (name) {
    ev.preventDefault();
    goTo(name);
  }
}
function goTo(name, ...params) {
  const view = views[name];
  if (typeof view == "function") {
    view(ctx, ...params);
  }
}
