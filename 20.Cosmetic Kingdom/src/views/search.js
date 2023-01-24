import { searchProduct } from "../api/data.js";
import { html } from "../lib.js";
import { productCard } from "./common.js";


const searchTemplate = (products, onSearch, params = "") => html`<h2>Search</h2>
  <section id="dashboard">
    <div class="form">
      <form @submit=${onSearch} class="create-form">
        <input
          type="text"
          name="search"
          placeholder="Enter a product"
          .value=${params}
        />
        <button type="submit">Search</button>
      </form>
    </div>

    ${products.length == 0
      ? html`<h2>No products found.</h2>`
      : products.map(productCard)}
  </section>`;

export async function searchPage(ctx) {
  const params = ctx.querystring.split("=")[1];
  let products = [];

  if(params){
    products = await searchProduct(decodeURIComponent(params))
  }
  //   console.log(params);
  ctx.render(searchTemplate(products, onSearch, params));

  function onSearch(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const search = formData.get("search");

    if (search) {
      ctx.page.redirect("/search?query=" + encodeURIComponent(search));
    }
  }
}
