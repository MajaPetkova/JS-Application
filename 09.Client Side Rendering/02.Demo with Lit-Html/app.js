import { render } from "https://unpkg.com/lit-html?module";
import articleTemplate from "./templates/article.js";



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
    onRender();
    event.target.reset()
    // console.log(content);
  }

  function onChange() {
    data.shift();
    data.unshift({
      title: "First New Article ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quaerat vitae harum iusto dignissimos molestiae.",
      author: "John Smith",
      comments: [],
      isOwner : true
    });
    onRender();
  }
}
