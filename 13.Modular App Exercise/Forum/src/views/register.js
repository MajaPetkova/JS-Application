import { html } from "../lib.js";

const registerTemplate = () => html`  <div class="narrow">
<header> <h2>Register</h2></header>
<form>
    <label><span>Email:</span>  <input type="text" name="email"></label>
    <label><span> Password:</span> <input type="text" name="password"></label>
    <label><span> Repeat Pass:</span> <input type="text" name="repass"></label>
    <div class="center">
        <input type="submit" class="action" value="Sign Up">
    </div>
</form>
</div>`;

export function registerPage(ctx) {
  ctx.render(registerTemplate());
}
