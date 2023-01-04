import { login } from "../api/data.js";
import { html, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const loginTemplate = (onSubmit) => html`  <div class="narrow">
<header> <h2> Login</h2></header>
<form @submit=${onSubmit}>
    <label><span>Email:</span>  <input type="text" name="email"></label>
    <label><span> Password:</span> <input type="text" name="password"></label>
    <div class="center">
        <input type="submit" class="action" value="Sign In">
    </div>
</form>
</div>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onSubmit, "email", "password")));


  async function onSubmit(data){
   await login(data.email, data.password);
   ctx.updateUserNav();
   page.redirect("/topics")
  }
}
