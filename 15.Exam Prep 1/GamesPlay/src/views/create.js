import { addGame } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const createTemplate = (onCreate) => html` <section
  id="create-page"
  class="auth"
>
  <form @submit=${onCreate} id="create">
    <div class="container">
      <h1>Create Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
      />

      <label for="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
      />

      <label for="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min="1"
        placeholder="1"
      />

      <label for="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary"></textarea>
      <input class="btn submit" type="submit" value="Create Game" />
    </div>
  </form>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));


  const userData= getUserData();
  
  if(!userData){
    ctx.page.redirect("/login")
  }
  async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get("title").trim();
    const category = formData.get("category").trim();
    const maxLevel= formData.get("maxLevel").trim();
    const imageUrl= formData.get("imageUrl").trim();
    const summary= formData.get("summary").trim();

    if (title == "" || category == "" || maxLevel == "" || imageUrl == "" || summary == "") {
      return alert("All fields are required");
    }
   await addGame({title, category, maxLevel, imageUrl, summary})
    ctx.page.redirect('/home')
  }
}
