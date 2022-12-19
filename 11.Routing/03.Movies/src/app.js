import { loginPage } from "./views/login.js";
import { render, page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { registerPage } from "./views/register.js";
import { editPage } from "./views/edit.js";
import { detailsPage } from "./views/details.js";

const root = document.querySelector("main");


page(decorateContext)
page('/home', catalogPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/edit', editPage);
page('/details', detailsPage)
page.start();


async function decorateContext (ctx, next){
    ctx.render=(template)=> render(template, root);
    next();
}

