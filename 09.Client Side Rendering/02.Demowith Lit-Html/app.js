import { html, render } from "https://unpkg.com/lit-html?module";

const articleTemplate = (data) => html`<article>
  <h3>${data.title}</h3>
  <div class="content-body">
    <p>${data.content}</p>
  </div>
  <footer>Author: ${data.author}</footer>
</article>`;

async function start() {
  const res = await fetch("./data.json");
  const data = await res.json();

  const main = document.querySelector("main");
  const renderBtn = document.getElementById("renderBtn");
  renderBtn.addEventListener("click", onRender);

  document.getElementById("changeBtn").addEventListener('click', onChange)

  function onRender() {
    const result = data.map(articleTemplate);
    render(result, main);
  }
  function onChange(){
    data.shift();
    data.unshift({
      "title":"First New Article ",
      "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat vitae harum iusto dignissimos molestiae.",
      "author":"John Smith"
    });
   onRender()
  }
}
start();
