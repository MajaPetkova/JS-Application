import { getAllIdeas } from "../src/api/data.js";
import { element } from "./dom.js";

const section = document.getElementById("dashboard-holder");
section.remove();
section.addEventListener("click", onDetails);
let ctx = null;

export function showCatalogPage(ctxTarget) {
   ctx = ctxTarget;
  ctx.showView(section);
  loadIdeas();
}
async function loadIdeas() {
  const ideas = await getAllIdeas();

  if(ideas.length ==0 ){
    section.replaceChildren(element('h1', {}, 'No ideas yet! Be the first one :)'))
  }
  else{
    const fragment = document.createDocumentFragment();
    ideas.map(createIdeaCard).forEach((i) => fragment.appendChild(i));
    //   console.log(ideas[1])
    section.replaceChildren(fragment);

  }
}

function createIdeaCard(idea) {
  const e = element("div", {
    className: "card overflow-hidden current-card details",
  });
  e.style.width = "20rem";
  e.style.height = "18rem";

  e.innerHTML = `
        <div class="card-body">
        <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a data-id="${idea._id}" class="btn" href="">Details</a>
        </div>`;

  return e;
}

function onDetails(ev) {
  if (ev.target.tagName == "A") {
    const id = ev.target.dataset.id;
    ev.preventDefault();
    ctx.goTo("details", id);
  }
}
