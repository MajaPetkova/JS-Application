import { showHome } from "./home.js";
import { showDetails } from "./details.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
// create placeholder modules for every view
// configure and test navigation
// implement module
// -create async functions for requests
// -implement DOM logic

const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    const view = views[e.target.id];
    if (typeof view == "function") {
        e.preventDefault()
      view();
    }
  }
});


// order of views
// x catalog (home view)
// - login/register
// - create
// - details
// - likes
// - edit
// - delete

showHome();
