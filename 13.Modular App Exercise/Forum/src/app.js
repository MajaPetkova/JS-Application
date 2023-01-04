import { logout } from "./api/data.js";
import {render, page} from "./lib.js";
import { getUserData } from "./util.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { topicsPage } from "./views/topics.js";


const root = document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homePage);
page("/topics", topicsPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", ()=> console.log("Create Page"));

updateUserNav();
page.start();

function decorateContext(ctx, next){
    ctx.render=(content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

 function updateUserNav(){
    const userData= getUserData();
    if(userData){
        document.querySelector(".user").style.display= "inline-block";
        document.querySelector(".guest").style.display= "none";
    }else{
        document.querySelector(".user").style.display= "none";
        document.querySelector(".guest").style.display= "inline-block";
    }

}
 function onLogout(){
    logout();
    updateUserNav();
    page.redirect("/")
}