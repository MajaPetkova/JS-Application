import { createProduct } from "../api/data.js";
import { html, } from "../lib.js";
import { notify } from "./notify.js";

const createTemplate = (onCreate) => html`<section id="create">
<div class="form">
  <h2>Add Product</h2>
  <form @submit=${onCreate}class="create-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Product Name"
    />
    <input
      type="text"
      name="imageUrl"
      id="product-image"
      placeholder="Product Image"
    />
    <input
      type="text"
      name="category"
      id="product-category"
      placeholder="Category"
    />
    <textarea
      id="product-description"
      name="description"
      placeholder="Description"
      rows="5"
      cols="50"
    ></textarea>
    
    <input
      type="text"
      name="price"
      id="product-price"
      placeholder="Price"
    />

    <button type="submit">Add</button>
  </form>
</div>
</section>`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const name= formData.get("name").trim();
    const imageUrl= formData.get("imageUrl").trim();
    const category = formData.get("category").trim()
    const description= formData.get("description").trim();
    const price= formData.get("price").trim();

    if(name == "" || imageUrl == "" || category == "" || description == "" || price == ""){
      return notify("All fields are required")
    }
    await createProduct({name, imageUrl,category, description, price})
 
    ctx.updateUserNav();
    ctx.page.redirect("/dashboard");
  }
}
