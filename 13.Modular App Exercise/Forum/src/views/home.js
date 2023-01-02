import { html } from "../lib.js";

const homeTemplate = () => html`
  <h1>Scripters Home</h1>
  <div class="splash">
    <p>Welcome to Scripters Forum</p>
    <div>
      <a href="/topics">Browse User Topics</a>
    </div>
  </div>`;

export function homePage(ctx) {
  ctx.render(homeTemplate());
}
