import{page, render} from "./lib.js"
// import * as api from "./api/data.js"
// window.api= api;

import { dashboardPage } from "./views/dashboard.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

const root= document.querySelector("main")

page(decorateContext);
page("/", homePage)
page("/dashboard", dashboardPage);
page("/login", loginPage);
page("/register", registerPage)
page.start();


function decorateContext(ctx, next){
   ctx.render =(content)=> render(content, root)
    next()
}