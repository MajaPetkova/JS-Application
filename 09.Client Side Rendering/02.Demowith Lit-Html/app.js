import { html, render } from "https://unpkg.com/lit-html?module";

const articleTemplate = (onSubmit, data) => html`<article>
  <input type="text" ?disabled=${data.disabled} .value="${data.color}" />
  <h3>${data.title}</h3>
  <div class=${data.color}>
    <p>${data.content}</p>
  </div>
  <footer>Author: ${data.author}</footer>
  <div class="comments">
    <form @submit=${onSubmit}>
      <textarea name="comment"></textarea>
      <button>Submit comment</button>
    </form>

    <ul>
      ${data.comments.map(c => html`<li>${c.content}</li>`)}
   </ul>
  </div>
</article>`;
start();

async function start() {
  const res = await fetch("./data.json");
  const data = await res.json();

  const main = document.querySelector("main");
  const renderBtn = document.getElementById("renderBtn");
  renderBtn.addEventListener("click", onRender);

  document.getElementById("changeBtn").addEventListener("click", onChange);

  function onRender() {
    const result = data.map((a) => articleTemplate(onSubmit.bind(null, a), a));
    render(result, main);
  }

  function onSubmit(article, event) {
    event.preventDefault();
    // console.log(article);
    const formData = new FormData(event.target);
    const content = formData.get("comment");
    article.comments.push({ content });
    // console.log(content);
  }

  function onChange() {
    data.shift();
    data.unshift({
      title: "First New Article ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat vitae harum iusto dignissimos molestiae.",
      author: "John Smith",
    });
    onRender();
  }
}
