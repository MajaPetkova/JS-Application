import { html } from "./utility.js";
// create module
// control create form(validation)


const createTemplate =()=> html `
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`
export function showCreate(ctx){
return createTemplate()
}