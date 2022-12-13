import { getAllIdeas } from "../src/api/data.js";
import { element } from "./dom.js";

const section = document.getElementById("dashboard-holder");
section.remove();

export function showCatalogPage(ctx) {
  ctx.showView(section);
  loadIdeas();
}
async function loadIdeas() {
  const ideas = await getAllIdeas();
  const fragment = document.createDocumentFragment();
    ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i))
//   console.log(ideas[1])
  section.replaceChildren(fragment);
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