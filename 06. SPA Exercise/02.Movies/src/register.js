// initialization
// -find relevant section

import { showView } from "./dom.js";

// -detach section from dom
const section = document.getElementById("form-sign-up");
section.remove();

// display logic

export function showRegister(){
    showView(section)
}