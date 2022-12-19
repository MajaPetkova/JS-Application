import { render, page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";

const root = document.querySelector("main");


page(decorateContext)
page('/home', catalogPage);
// page('/create',)
page.start();


async function decorateContext (ctx, next){
    ctx.render=(template)=> render(template, root);
    next();
}

