import { logout } from "./api/data.js";
import{page, render} from "./lib.js"
import { getUserData } from "./util.js";
import { createPage } from "./views/createProduct.js";
// import * as api from "./api/data.js"
// window.api= api;

import { dashboardPage } from "./views/dashboard.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";


document.getElementById("logout-btn").addEventListener("click", onLogout);
const root= document.querySelector("main");

updateUserNav();
page(decorateContext);
page("/", homePage)
page("/dashboard", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/addProduct" , createPage)
page.start();


function decorateContext(ctx, next){
   ctx.render =(content)=> render(content, root);
   ctx.updateUserNav = updateUserNav;
    next()
}

function onLogout(){
 logout();
 updateUserNav();
}


function updateUserNav(){
    const userData= getUserData();

    if(userData){
        document.querySelector(".user").style.display = "block";
        document.querySelector(".guest").style.display = "none";
    }else{
        document.querySelector(".user").style.display = "none";
        document.querySelector(".guest").style.display = "block";
    }
}