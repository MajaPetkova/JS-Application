import { page } from "./lib.js";
import { homePage } from "./views/home.js";

// import * as api from "./api/data.js";
// window.api= api;

const root= document.querySelector("main")

page('/', homePage);
page('/memes', catalogPage);
page.start();

