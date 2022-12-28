import { page, render } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { loginPage } from "./views/login.js";
import { editPage } from "./views/edit.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";
import { logout } from "./api/data.js";
import { getUserData } from "./util.js";

// import * as api from "./api/data.js";
// window.api = api;
const root = document.querySelector("div.container");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", catalogPage);
page("/details/:id", detailsPage);
page("/register", registerPage);
page("/create", createPage);
page("/login", loginPage);
page("/edit/:id", editPage);
page("/my-furniture", catalogPage);
updateUserNav()
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

function updateUserNav() {
  const userData = getUserData();
  if (userData) {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }
}
async function onLogout() {
  await logout();
  updateUserNav();
  page.redirect("/login");
}
