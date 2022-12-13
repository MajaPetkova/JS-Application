import { element } from "./dom.js";


const section = document.getElementById('homePage');
section.remove();

export function showHomePage(ctx){
    ctx.showView(section);
    
}