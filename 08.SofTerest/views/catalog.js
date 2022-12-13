import { element } from "./dom.js";


const section = document.getElementById('dashboard-holder');
section.remove();

export function showCatalogPage(ctx){
    ctx.showView(section);
    
}