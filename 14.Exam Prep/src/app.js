import { page, render } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";

// import * as api from "./api/data.js";
// window.api= api;

const root = document.querySelector("main");

page(decorateContext)
page("/", homePage);
page("/memes", catalogPage);
page("/login", loginPage)
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}
