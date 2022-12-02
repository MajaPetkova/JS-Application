import { showView } from "./dom.js";

const section = document.getElementById("form-login");
section.remove();

// display logic

export function showLogin(){
    showView(section)
}