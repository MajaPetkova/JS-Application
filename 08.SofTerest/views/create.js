import { element } from "./dom.js";


const section = document.getElementById('createPage');
section.remove();

export function showCreatePage(ctx){
    ctx.showSection(section);
    
}