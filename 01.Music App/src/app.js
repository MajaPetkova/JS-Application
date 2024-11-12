import { page, render } from './lib.js'
import { homePage } from './views/home.js';
import { getUserData } from './util.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/api.js';
import { createPage } from './views/create.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';



const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage)
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/search', searchPage);
page('/catalog', catalogPage);
page('/edit/:id', editPage)


updateUserNav()
page.start()

import * as api from './api/data.js';
import { searchPage } from './views/search.js';
window.api = api;

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
    next()
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
            // document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/')
}