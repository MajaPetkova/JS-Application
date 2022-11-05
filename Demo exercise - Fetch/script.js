const url = "https://fakestoreapi.com/products";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const cardItem = document.getElementById("cards");
    data.forEach(x=>{
        cardItem.innerHTML += `<div class="card">
                  <h1 class="card__title">${x.title}</h1>
                 <img src=${x.image} alt="img" class="card__img">
                 <p>Description:${x.description}</p>
                  <p class="card__category">${x.category}</p>
                  <p class="card__price">${x.price}</p>
             </div>`;
    })
 })
  .catch((err) => {
    console.log(err);
  });
