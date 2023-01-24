import { getAllProducts } from "../api/data.js";
import {html} from "../lib.js";
import { productCard } from "./common.js";
// const main= document.querySelector("main")

const dashboardTemplate= (products)=> html `<h2>Products</h2>
<section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
 ${products.length == 0 ? html `<h2>No products yet.</h2>` : products.map(productCard)}
</section>
 `

// const productCard= (product)=> html ` <div class="product">
// <img src="${product.imageUrl}" alt="example1" />
// <p class="title">
//   ${product.title}
// </p>
// <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
// <a class="details-btn" href="/details/${product._id}">Details</a>
// </div>`

 export async function dashboardPage(ctx){
  const products = await getAllProducts()
    ctx.render(dashboardTemplate(products));

 }