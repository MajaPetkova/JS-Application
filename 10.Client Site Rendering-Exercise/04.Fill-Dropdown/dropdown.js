import {html, render } from "./node_modules/lit-html/lit-html.js";

const selectTemplate =(items)=> html `
 <select id="menu">
    ${items.map(i=> html`<option value= ${i._id}>${i.text}</option>`)}
 </select>`



const root = document.querySelector('div');
document.querySelector('form').addEventListener('submit', addItem)
getData()

// Start:
// add event listeners 
// call getData
// get data:
// fetch data and parse
// call update
async function getData(){
    const res=await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data= await res.json()
    update(Object.values(data))
}
// update:
// render Template

function update(items){
    const result= selectTemplate(items); 
    render(result, root )
}
// add item:
// read input
// post request
// on success, call getData
async function addItem(ev){
    ev.preventDefault();
    const text = document.getElementById('itemText').value;
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text})
    });
    if(res.ok ==true){
        getData()
    }
}