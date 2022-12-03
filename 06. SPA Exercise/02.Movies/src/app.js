import { showHome } from "./home.js";
import { showDetails } from "./details.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
// create placeholder modules for every view
// configure and test navigation
// implement module
// -create async functions for requests
// -implement DOM logic

const nav= document.querySelector('nav')
const views = {
  homeLink: showHome,
  loginLink: showLogin,
  registerLink: showRegister,
};

nav.addEventListener("click", (e) => {
  if (e.target.tagName == "A") {
    const view = views[e.target.id];
    if (typeof view == "function") {
        e.preventDefault()
      view();
    }
  }
});
function updateNav(){
  const userData=JSON.parse(sessionStorage.getItem('userData'));
  if(userData != null){
    console.log( [...nav.querySelectorAll('.user')])
  [...nav.querySelectorAll('.user')].forEach(e=> e.style.display = 'block')
  }else{

  }
}

// order of views
// x catalog (home view)
// - login/register
// - create
// - details
// - likes
// - edit
// - delete

showHome();
