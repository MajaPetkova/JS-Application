import { createBook, html } from "./utility.js";
// create module
// control create form(validation)

const createTemplate = (onSuccess) => html` 
<form @submit=${ev => onSubmit(ev, onSuccess)} id="add-form">
  <h3>Add book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." />
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." />
  <input type="submit" value="Submit" />
</form>`;


export function showCreate(ctx) {
  return createTemplate(ctx.update);
}

async function onSubmit(ev, onSuccess) {
  ev.preventDefault();
  const formData = new FormData(ev.target);

  const title = formData.get("title").trim();
  const author = formData.get("author").trim();

  await createBook({ title, author });
  ev.target.reset();
  onSuccess()
}
