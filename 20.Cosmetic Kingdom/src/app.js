import{page, render} from "./lib.js"

import { dashboardPage } from "./views/dashboard.js";
import { homePage } from "./views/home.js";
import * as api from "./api/data.js"
import { loginPage } from "./views/login.js";
window.api= api;

const root= document.querySelector("main")

page(decorateContext);
page("/", homePage)
page("/dashboard", dashboardPage);
page("/login", loginPage)
page.start();


function decorateContext(ctx, next){
   ctx.render =(content)=> render(content, root)
    next()
}