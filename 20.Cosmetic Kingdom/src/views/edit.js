import { editProduct, getProductById } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (product, onEdit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Product</h2>
    <form @submit=${onEdit} class="edit-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Product Name"
        .value=${product.name}
      />
      <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
        .value=${product.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
        .value=${product.category}
      />
      <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value=${product.description}
      ></textarea>

      <input
        type="text"
        name="price"
        id="product-price"
        placeholder="Price"
        .value=${product.price}
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const product = await getProductById(ctx.params.id);
  ctx.render(editTemplate(product, onEdit));

  async function onEdit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const name = formData.get("name").trim();
    const imageUrl = formData.get("imageUrl").trim();
    const category = formData.get("category").trim();
    const description = formData.get("description").trim();
    const price = formData.get("price").trim();

    if (
      name == "" ||
      imageUrl == "" ||
      category == "" ||
      description == "" ||
      price == ""
    ) {
      return alert("All fields are required");
    }
    await editProduct(ctx.params.id, {
      name,
      imageUrl,
      category,
      description,
      price,
    });

    ctx.updateUserNav();
    ctx.page.redirect("/dashboard");
  }
}
