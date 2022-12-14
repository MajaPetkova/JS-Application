import {html, render} from 'https://unpkg.com/lit-html?module';


const articleTemplate=(data)=> html `<article>
<h3>${data.title}</h3>
<div class="content-body">
    <p>${data.content}</p>
</div>
<footer>Author: ${data.author} </footer>
</article>`

async function start() {
  const res = await fetch("./data.json");
  const data = await res.json();

const main= document.querySelector('main');

const result= data.map(articleTemplate)

render(result, main)

}
start();
