import { page } from "./lib.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { loginPage } from "./views/login.js";
import { editPage} from "./views/edit.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";

page("/", catalogPage);
page("/details/:id", detailsPage)
page("/register", registerPage)
page("/create", createPage)
page("/login", loginPage)
page("/edit/:id", editPage)
page('/my-furniture',catalogPage )
page.start();