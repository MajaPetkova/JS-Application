// import * as api from './api/data.js';
// window.api= api;

import { showCatalogPage } from "../views/catalog.js";
import { showCreatePage } from "../views/create.js";
import { showDetailsPage } from "../views/details.js";
import { showHomePage } from "../views/home.js";
import { showLoginPage } from "../views/login.js";
import { showRegisterPage } from "../views/register.js";

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
  details: showDetailsPage
};
