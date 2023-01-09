import { createMeme } from "../api/data.js";
import { html } from "../lib.js";

const createTemplate = (onCreate) => html`<section id="create-meme">
  <form @submit="${onCreate}id" ="create-form">
    <div class="container">
      <h1>Create Meme</h1>
      <label for="title">Title</label>
      <input id="title" type="text" placeholder="Enter Title" name="title" />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
      ></textarea>
      <label for="imageUrl">Meme Image</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter meme ImageUrl"
        name="imageUrl"
      />
      <input type="submit" class="registerbtn button" value="Create Meme" />
    </div>
  </form>
</section> `;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const title = formData.get("title").trim();
    const description = formData.get("description").trim();
    const img = formData.get("imageUrl").trim();

if(title == '' || description=='' || img==''){
    return alert("All fields are required")
}

    await createMeme({
      title,
      description,
      img,
    });

    ctx.page.redirect('/memes')
  }
}
