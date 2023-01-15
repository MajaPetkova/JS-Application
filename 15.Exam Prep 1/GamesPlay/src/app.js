import {page, render} from "./lib.js";
import { homePage } from "./views/home.js";

// import * as api from "./api/data.js";
// window.api= api;
const root= document.getElementById("main-content");

page(decorateContext)
page("/", homePage);
page.start();


function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    next()
}
