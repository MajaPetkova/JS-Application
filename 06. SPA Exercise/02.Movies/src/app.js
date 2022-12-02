// create placeholder modules for every view
// configure and test navigation
// implement module
// -create async functions for requests
// -implement DOM logic

import { showHome } from "./home.js";
import { showDetails} from './details.js'
import { showCreate } from "./create.js";
// order of views
// - catalog (home view)
// - login/register
// - create 
// - details
// - likes
// - edit
// - delete

showHome();
window.showHome= showHome;
window.showHome=showDetails;
window.showHome=showCreate;