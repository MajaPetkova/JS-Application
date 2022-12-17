
import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats as catsData } from "./catSeeder.js";

// Template
// - contains cat info
// - has toggle button

// start:
// -parse imported data
// -pass to template

const mainEl = document.getElementById("allCats");

const catCard = (cat) => html`<li>
  <img
    src="./images/${cat.imageLocation}.jpg"
    width="250"
    height="250"
    alt="Card image cap"
  />
  <div class="info">
    <button class="showBtn">Show status code</button>
    <div class="status" style="display: none" id="${cat.id}">
      <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
      <p class="card-text">${cat.statusMessage}</p>
    </div>
  </div>
</li>`;

// const cat= catCard(catsData[2])
// console.log(cat)
render(
  html`<ul>
    ${catsData.map((c) => catCard(c))}
  </ul>`,
  mainEl
);
mainEl.addEventListener("click", onToggle);

function onToggle(ev) {
  ev.preventDefault();
  if (ev.target.tagName == "BUTTON") {
    let displayEl = ev.target.parentNode.querySelector(".status");

    if (displayEl.style.display == "none") {
      displayEl.style.display = "block";
    ev.target.textContent= "Hide status code"
    } else {
      displayEl.style.display = "none";
      ev.target.textContent= "Show status code"
    }
  }
}