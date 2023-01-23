import { register } from "../api/data.js";
import { html, render } from "../lib.js";
import { notify } from "./notify.js";

const registerTemplate = (onSubmit) => html` <section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit=${onSubmit}class="register-form">
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const repass = formData.get("re-password").trim();

    if (email == "" || password == "") {
      return notify("All fields are required");
    }
    if (password !== repass) {
      return notify("Passwords don't match ");
    }

    await register(email, password);
    ctx.updateUserNav();
    ctx.page.redirect("/dashboard");
  }
}
