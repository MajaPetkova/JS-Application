
import { html, render } from "./node_modules/lit-html/lit-html.js"; 
// on Submit:
// - parse data
// - render Template

// template:
// ul with li for each array item

const rootEl= document.getElementById('root')
document.querySelector('form').addEventListener('submit', onSubmit);


function onSubmit(ev){
  ev.preventDefault();
  const towns = document.getElementById('towns').value.split(',').map(t=> t.trim());
//    console.log(towns);

        const result= listTemplate(towns)
        render(result, rootEl)
}
     const listTemplate=(towns)=> html `
        <ul>
        ${towns.map(t=> html`<li>${t}</li>`)}
        </ul>`  

