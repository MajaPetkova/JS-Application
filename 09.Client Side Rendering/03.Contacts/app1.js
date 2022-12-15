import { contacts } from "./contacts.js";
import { styleMap } from "./node_modules/lit-html/directives/style-map.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

start();
function start() {
  const container = document.getElementById("contacts");

  const contactTemplate = (data) => html`<div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${data.name}</h2>
      <button class="detailsBtn">Details</button>
      <div class="details" id="${data.id}">
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: ${data.email}</p>
      </div>
    </div>
  </div>`;

  onRender();

  container.addEventListener("click", onClick);

  function onClick(ev) {
    if (ev.target.tagName == "BUTTON") {
      const div = ev.target.parentNode.querySelector(".details");
      if (div.style.display == "block") {
        div.style.display = "none";
      } else {
        div.style.display = "block";
      }

      // console.log(div);
    }
  }

  function onRender() {
    render(contacts.map(contactTemplate), container);
  }
}
