import { element } from "./dom.js";
import { login } from "../src/api/data.js";

const section = document.getElementById("loginPage");
section.remove();

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;

export function showLoginPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showView(section);
}
async function onSubmit(ev) {
  ev.preventDefault();
  const formData = new FormData(form);

  const email= formData.get('email').trim();
  const password= formData.get('password').trim();
  
//   console.log(email)
  await login (email, password);
  ctx.goTo('home');
  ctx.updateUserNav();
}
