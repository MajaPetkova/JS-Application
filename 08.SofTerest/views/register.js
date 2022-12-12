import { element } from "./dom.js";


const section = document.getElementById('registerPage');
section.remove();

export function showRegisterPage(ctx){
    ctx.showSection(section);
    
}