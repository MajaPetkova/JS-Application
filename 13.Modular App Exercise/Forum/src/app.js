import {render, page} from "./lib.js";


const root= document.querySelector("main");

page(decorateContext);
page("/", ()=> console.log("Home Page"));
page("/topics", ()=> console.log("Topics"));
page("/login", ()=> console.log("Login page"));
page("/register", ()=> console.log("Register Page"));
page("/create", ()=> console.log("Create Page"))
page.start();

function decorateContext(ctx, next){
    ctx.render=(content)=>render(content, root)
}