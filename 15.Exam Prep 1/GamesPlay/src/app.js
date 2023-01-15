import {page, render} from "./lib.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";

// import * as api from "./api/data.js";
// window.api= api;
const root= document.getElementById("main-content");

page(decorateContext)
page("/home", homePage);
page("/login", loginPage )
page.start();


function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    next()
}
