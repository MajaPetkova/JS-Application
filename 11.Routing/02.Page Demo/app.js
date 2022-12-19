import page from "//unpkg.com/page/page.mjs";


const main= document.querySelector('main');

function homePage(ctx, next){
    console.log(ctx)
    console.log(next)
    main.innerHTML= '<h2>Home Page</h2> <p>Welcome to our site</p>'
}
function catalogPage(){
    main.innerHTML= '<h2>Catalog Page</h2> <p>Our Products</p> <a href="/catalog/1234">Product</a>'
}
function detailsPage(ctx){
    // console.log(ctx)
    main.innerHTML= '<h2>Details Page</h2> <p>Product Details</p> <button>Buy now</button>';
    document.querySelector('button').addEventListener('click', ()=> {
        page.redirect('/checkout')
    })
}
function checkoutPage(){
    main.innerHTML= '<h2>Checkout Page</h2> <p>Cart Details</p>'
}
function aboutPage(){
    main.innerHTML= '<h2>About Page</h2> <p>About our work</p>'
}


page('/home', homePage)
page('/catalog', catalogPage)
page('/about', aboutPage)
page('/details', detailsPage)
page('/catalog/1234', detailsPage)
page('/checkout', checkoutPage)
page.redirect('/', '/home')
page.start()
