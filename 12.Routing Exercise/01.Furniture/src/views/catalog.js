import { getAll, getMyItems } from "../api/data.js";
import { html, until } from "../lib.js";
import { getUserData, parseQueryString } from "../util.js";

const catalogTemplate = (dataPromise, userPage, onSearch, search) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      ${userPage
        ? html`<h1>My Furniture</h1>
            <p>This is a list of your publications.</p>`
        : html` <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>`}
    </div>
    <div class="col-md-12">
      <form @submit=${onSearch}>
        <input type="text" name="search" .value=${search}>
        <input type="submit" value="Search">
      </form>
    </div>
  </div>
  
  <!-- <a class="page-index btn btn-info" href="?page=2">2</a>
  <a class="page-index btn btn-info" href="?page=3">3</a> -->
  <div class="space-top">
    ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
  </div>`;


const pagerTemplate= (page, pages) => html `
<div class="space-top">
${page > 1 ? html `<a class="page-index btn btn-info" href=${`?page=${page - 1}`}>&lt; Prev</a>` : null }
${page < pages ?html `<a class="page-index btn btn-info" href=${`?page=${page + 1}`}>Next &gt;</a>` : null}
</div>`

const itemTemplate = (item) => html`<div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src=${item.img} />
      <p>${item.description}</p>
      <footer>
        <p>Price: <span>${item.price} $</span></p>
      </footer>
      <div>
        <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div> `;

export function catalogPage(ctx) {
 const query=parseQueryString(ctx.querystring);
 const page=Number( query.page || 1);
const search= query.search || "";
  // const page = Number(ctx.querystring.split("=")[1] || 1);
  // console.log(page);

  const userPage = ctx.pathname == "/my-furniture";
  ctx.render(catalogTemplate(loadItems(userPage, page, search), userPage, onSearch, search));

  function onSearch(ev){
   ev.preventDefault();

   const formData= new FormData(ev.target);
   const searchParam= formData.get("search").trim();
    
   if(searchParam){
     ctx.page.redirect(`?search=${searchParam}`)
   }else{
    ctx.page.redirect('/')
   }
  }
}
async function loadItems(userPage, page, search) {
  let items = [];
  if (userPage) {
    const userId = getUserData().id;
    items = await getMyItems(userId);
  } else {
    items = await getAll(page, search);
  }
  return[
    pagerTemplate(page, items.pages),
    ...items.data.map(itemTemplate)
  ]
}
