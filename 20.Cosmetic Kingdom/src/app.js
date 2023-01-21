import{page, render} from "./lib.js"

import * as api from "./api/data.js"
import { dashboardPage } from "./views/dashboard.js";
window.api= api;

const root= document.querySelector("main")

page(decorateContext)
page("/dashboard", dashboardPage)
page.start();


function decorateContext(ctx, next){
   ctx.render =(content)=> render(content, root)
    next()
}