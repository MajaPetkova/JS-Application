// initialization
// -find relevant section

import { showView } from "./dom.js";

// -detach section from dom
const section = document.getElementById("home-page");
section.remove();

// display logic

export function showHome(){
    showView(section)
}