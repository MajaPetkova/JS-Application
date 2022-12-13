import { createIdea } from "../src/api/data.js";
import { element } from "./dom.js";

const section = document.getElementById("createPage");
section.remove();
const form = section.querySelector("form");
form.addEventListener("submit", onCreate);

let ctx = null;
export function showCreatePage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showView(section);
}
async function onCreate(ev) {
  ev.preventDefault();
  const formData = new FormData(form);

  const title = formData.get("title").trim();
  const description = formData.get("description").trim();
  const img = formData.get("imageURL").trim();

  if (title.length < 6) {
    return alert ('Title must be at least 6 characters long')
  }
  if (title.description < 10) {
    return alert ('Description must be at least 10 characters long')
  }
  if (img.length < 5) {
    return alert ('Image URL must be at least 5 characters long')
  }
  createIdea({title, description, img});
  form.reset();
  ctx.goTo("catalog");
}
