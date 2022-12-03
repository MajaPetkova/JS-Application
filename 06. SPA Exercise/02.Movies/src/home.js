import { showView } from "./dom.js";
import { showCreate } from "./create.js";
import { element } from "./dom.js";
// initialization
// -find relevant section

// -detach section from dom
const section = document.getElementById("home-page");
const catalog = section.querySelector(".card-deck.d-flex.justify-content-center");
section.querySelector("#createLink").addEventListener("click", (e) => {
  e.preventDefault();
  showCreate();
});
section.remove();

// display logic

export function showHome() {
  showView(section);
  getMovies();
}

async function getMovies() {
  const res = await fetch("http://localhost:3030/data/movies");
  const data = await res.json();
  catalog.replaceChildren(...data.map(createCard));
    // return data;
}

function createCard(movie) {
  const e = element("div", { className: "card mb-4" });
  e.innerHTML = `<img
class="card-img-top"
src="${movie.img}"
alt="Card image cap"
width="400"
/>
<div class="card-body">
<h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
<a href="#">
  <button type="button" class="btn btn-info">
    Details
  </button>
</a>
</div>`;
  return e;
}
// window.getMovies = getMovies;
