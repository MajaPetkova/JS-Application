import { element } from "./dom.js";


const section = document.getElementById('loginPage');
section.remove();

export function showLoginPage(ctx){
    ctx.showView(section);
    
}