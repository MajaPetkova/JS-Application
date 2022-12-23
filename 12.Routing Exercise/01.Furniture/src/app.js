import { page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";

page("/", catalogPage);
page("/details/:id", () => console.log("details"))
page("/register", () => console.log("register"))
page("/create", () => console.log("create"))
page("/login", () => console.log("login"))
page("/edit/:id", () => console.log("edit"))
page("/my-furniture", () => console.log("my furniture"))
page.start();