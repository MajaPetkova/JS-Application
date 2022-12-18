import { html, render } from "../node_modules/lit-html/lit-html.js";
export { html, render };
// api module
// load books
// edit books
// create book
// delete book

const host = "http://localhost:3030/jsonstore/collections";

async function request(url, method = "get", data) {
  const options = {
    method,
    headers: {},
  };
  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  const res = await fetch(host + url, options);


  if (res.ok != true) {
    const error = await res.json();
    alert(error);
    throw new Error(error.message)
  }
  return res.json()
}

