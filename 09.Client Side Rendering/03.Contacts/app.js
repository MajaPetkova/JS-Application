import { contacts } from "./contacts.js";
import { styleMap} from "./node_modules/lit-html/directives/style-map.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

start();
function start() {
  const container = document.getElementById("contacts");

  const contactTemplate = (data, onDetails) => html`<div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${data.name}</h2>
      <button class="detailsBtn" @click="${() => onDetails(data)}"> ${data.details ? "Hide" : "Details"} </button>
      <div class="details" id="${data.id}" style = ${styleMap({display: data.details ? "block" : "none" })}>
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: ${data.email}</p>
      </div>
    </div>
  </div>`;

  onRender();

  function onDetails(contact) {
    // console.log(contact.id)
    // contact.details = true;
    contact.details= !(contact.details);
    onRender();
  }

  function onRender() {
    render(
      contacts.map((c) => contactTemplate(c, onDetails)), container);
  }
}
