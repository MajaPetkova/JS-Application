import { deleteProduct, getProductById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, isOwner, isGuest, onDelete) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.name}</p>
    <p id="details-category">
      Category: <span id="categories">${product.category}</span>
    </p>
    <p id="details-price">
      Price: <span id="price-number">${product.price}</span>$
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">0</span> times.</h4>
        <span>${product.description}</span>
      </div>
    </div>

    <div id="action-buttons">
     ${isOwner
        ? html`<a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="" id="delete-btn">Delete</a>`
        : html` <a href="" id="buy-btn">Buy</a>`}
      </div>
</section>`;

export async function detailsPage(ctx) {
  const product = await getProductById(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && userData.id == product._ownerId;
  const isGuest = userData && userData.id !== product._ownerId;
  ctx.render(detailsTemplate(product, isOwner, isGuest, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this product?");

    if (choice) {
      await deleteProduct(ctx.params.id);
      ctx.page.redirect("/dashboard");
    }
  }
}
