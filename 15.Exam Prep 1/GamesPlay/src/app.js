import { logout } from "./api/data.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

// import * as api from "./api/data.js";
// window.api= api;
const root = document.getElementById("main-content");
document.getElementById("logoutBtn").addEventListener("click", onLogout);


updateUserNav();
page(decorateContext);
page("/home", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/catalog", catalogPage);
page("/edit/:id", editPage)

page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}

export function updateUserNav() {
  const userData = getUserData();
  if (userData) {
    document.getElementById("user").style.display = "block";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "block";
  }
}

async function onLogout(){
    logout();
    updateUserNav();
    page.redirect("/home")
}
