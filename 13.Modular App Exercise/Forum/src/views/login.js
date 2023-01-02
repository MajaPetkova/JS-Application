import { html } from "../lib.js";

const loginTemplate = () => html`  <div class="narrow">
<header> <h2> Login</h2></header>
<form>
    <label><span>Email:</span>  <input type="text" name="email"></label>
    <label><span> Password:</span> <input type="text" name="password"></label>
    <div class="center">
        <input type="submit" class="action" value="Sign In">
    </div>
</form>
</div>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate());
}
