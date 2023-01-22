import { getAllProducts } from "../api/data.js";
import {html, render} from "../lib.js";
// const main= document.querySelector("main")

const dashboardTemplate= (products)=> html `<h2>Products</h2>
<section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
 ${products.length == 0 ? html `<h2>No products yet.</h2>` : products.map(productCard)}
  <!-- <div class="product">
    <img src="./images/product example 2.png" alt="example1" />
    <p class="title">
    Eyeshadow Palette
    </p>
    <p><strong>Price:</strong><span class="price">19.99</span>$</p>
    <a class="details-btn" href="">Details</a> -->
  <!-- </div><div class="product">
    <img src="./images/product example 3.png" alt="example1" />
    <p class="title">
    Lipstick
    </p>
    <p><strong>Price:</strong><span class="price">16.99 </span>$</p>
    <a class="details-btn" href="">Details</a>
  </div> -->
</section>
 <!-- Display an h2 if there are no posts -->
 `

const productCard= (product)=> html ` <div class="product">
<img src="${product.imageUrl}" alt="example1" />
<p class="title">
  ${product.title}
</p>
<p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
<a class="details-btn" href="/details/${product._id}">Details</a>
</div>`

 export async function dashboardPage(ctx){
  const products = await getAllProducts()
    ctx.render(dashboardTemplate(products));

 }