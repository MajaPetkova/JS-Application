import { renderTemplate } from "./engine.js";

async function start() {
  const res = await fetch("./data.json");
  const data = await res.json();
  // console.log(data)

  const template = await (await fetch("./article.html")).text();
  // console.log(template)

    const main= document.querySelector('main')

//   const result = renderTemplate(template, data[3]);
//   console.log(result)

  main.innerHTML= data.map(a => renderTemplate(template, a)).join('')
}
start();
