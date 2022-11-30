import { showSection, element } from "./dom.js";

const section = document.getElementById("loginSection");
section.remove();

export function showLoginPage() {
  showSection(section);
}