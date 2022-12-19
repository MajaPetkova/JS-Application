import { loginPage } from "./views/login.js";
import { render, page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { registerPage } from "./views/register.js";
import { editPage } from "./views/edit.js";
import { detailsPage } from "./views/details.js";
import { getUserData } from "./util.js";

const root = document.querySelector("main");

page(decorateContext)
page('/home', catalogPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/edit', editPage);
page('/details', detailsPage);

updateUserNav()
page.start();


async function decorateContext (ctx, next){
    ctx.render=(template)=> render(template, root);
    ctx.updateUserNav = updateUserNav;
    next();
}
function updateUserNav(){
    const userData= getUserData()
    if(userData){
    [...document.querySelectorAll('.user')].forEach(x=> x.style.display ="block") ;
    [...document.querySelectorAll('.guest')].forEach(x=>x.style.display ="none" );
    document.getElementById("welcomeMsg").textContent= `Welcome,  ${userData.email}`
    }else{ 
    [...document.querySelectorAll('.user')].forEach(x=> x.style.display ="none") ;
    [...document.querySelectorAll('.guest')].forEach(x=>x.style.display ="block" );
    }
}

