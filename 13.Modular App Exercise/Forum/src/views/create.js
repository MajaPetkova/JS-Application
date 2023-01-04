import { input } from "../common/input.js";
import { html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const createTemplate = (onSubmit, errorMsg,errors, values) => html`  <div class="narrow">
<header> <h2> Create new Topic</h2></header>
<form @submit=${onSubmit}>
${errorMsg ? html`<p class="err-msg">${errorMsg}</p>` : null}
${input("Topic Title:", "text", "title", values.title, errors.title)}
${input("Content:", "textarea", "content", values.content, errors.content)}
    <div class="center">
        <input type="submit" class="action" value="Publish Topic">
    </div>
</form>
</div>`;

export function createPage(ctx) {
  update();

  function update(errorMsg="", errors={}, values={}){
    ctx.render(createTemplate(createSubmitHandler(onSubmit, "title", "content"), errorMsg, errors, values));

  }


  async function onSubmit(data){
    // try{
    //   await login(data.email, data.password);
    //   ctx.updateUserNav();
    //   page.redirect("/topics")
    // }catch(err){
    //   const message= err.message || err.error.message;
    //   update(message, data.email)
    // }
  }
}
