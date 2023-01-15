import { login } from "../api/data.js";
import { html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const loginTemplate = (onSubmit, errorMsg, email) => html`  <div class="narrow">
<header> <h2> Login</h2></header>
<form @submit=${onSubmit}>
${errorMsg ? html`<p class="err-msg">${errorMsg}</p>` : null}
    <label><span>Email:</span>  <input type="text" name="email" .value=${email}></label>
    <label><span> Password:</span> <input type="text" name="password"></label>
    <div class="center">
        <input type="submit" class="action" value="Sign In">
    </div>
</form>
</div>`;

export function loginPage(ctx) {
  update();

  function update(errorMsg="", email=""){
    ctx.render(loginTemplate(createSubmitHandler(onSubmit, "email", "password"), errorMsg, email));

  }


  async function onSubmit(data){
    try{
      await login(data.email, data.password);
      ctx.updateUserNav();
      page.redirect("/topics")
    }catch(err){
      const message= err.message || err.error.message;
      update(message, data.email)
    }
  }
}
