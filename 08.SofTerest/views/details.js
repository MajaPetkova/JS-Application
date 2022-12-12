import { element } from "./dom.js";


const section = document.getElementById('detailsPage');
section.remove();

export function showDetailsPage(ctx){
    ctx.showSection(section);
    
}