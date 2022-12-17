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
    <button @click=${() => toggleInfo(cat)} class="showBtn">
     ${cat.info ? "Hide" : "Show"} status code
    </button>
    ${cat.info
      ? html`<div class="status" id="${cat.id}">
          <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
          <p class="card-text">${cat.statusMessage}</p>
        </div>`
      : null}
  </div>
</li>`;

// const cat= catCard(catsData[2])
// console.log(cat)
catsData.forEach((c) => (c.info = false));
update();


function update() {
  render(
    html`<ul>
      ${catsData.map((c) => catCard(c))}
    </ul>`,
    mainEl
  );
}

function toggleInfo(cat) {
  cat.info = !cat.info;
  update();
}
