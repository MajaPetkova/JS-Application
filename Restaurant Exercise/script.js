const container = document.querySelector(".container");
const url = "https://example-data.draftbit.com/restaurants";

async function getRestaurant() {
  try {
    const res = await fetch(url);
    if (res.ok != true) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    console.log(data);
    container.innerHTML = data.map((x) =>(
       `<div class="card-restaurant">
       <div class="card-restaurant-heading">
           <h2>${x.name}</h2>
       </div>
       <img src="${x.image}" alt="#">
       <div class="card-restaurant-details">
           <div class="country"><p><span><i class="fa-sharp fa-solid fa-flag"></i></span>${x.country}</p></div>
           <p class="phone"><span><i class="fa-solid fa-phone"></i></span>${x.phone}</p>
           <p class="address"><span><i class="fa-solid fa-location-dot"></i> ${x.address}</span></p>
           <div class="website">
               <a href="${x.website}" target="_blank">Visit our Website </a>
           </div>
       </div>
      </div>` 
    ) );
  } catch (err) {
    container.textContent= err.message
    err.message;
  }
}
getRestaurant();
