import { login } from "../api/data.js";
import { html, render } from "../lib.js";
import { notify } from "./notify.js";

const loginTemplate = (onSubmit) => html`<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form @submit=${onSubmit} class="login-form">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export async function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    if (email == "" || password == "") {
      return notify("All fields are required");
    }
    await login(email, password);
    ctx.updateUserNav();
    ctx.page.redirect("/dashboard");
  }
}
