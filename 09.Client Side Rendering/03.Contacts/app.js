import { contacts } from "./contacts.js";
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
      <button class="detailsBtn" onclick="showDetails(3)">Details</button>
      <div class="details" id="${data.id}" style="display: none;">
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: ${data.email}</p>
      </div>
    </div>
  </div>`;

  render(contacts.map(contactTemplate), container);
}
