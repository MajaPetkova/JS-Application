const searchBtn = document.getElementById("search-btn");
const countryInput = document.getElementById("country-input");
const result = document.getElementById("result");

searchBtn.addEventListener("click", onSearch);

async function onSearch() {
  const countryName = countryInput.value;
  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  const res = await fetch(url);
  try {
    if (res.ok != true) {
      const error = await response.json();
      throw new Error(error);
    }
    const data = await res.json();

    result.innerHTML = `<img class="flag-img" src="${data[0].flags.svg}" alt="country-img"/>
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
         <div class="data-wrapper">
           <h4>Capital:</h4>
           <span>${data[0].capital}</span>
          </div>
     </div>
     <div class="wrapper">
        <div class="data-wrapper">
          <h4>Continent:</h4>
          <span>${data[0].continents}</span>
         </div>
         <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
           </div>
           <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            }</span>
           </div>  
           <div class="data-wrapper">
            <h4>Common Language:</h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
           </div>
   </div>
  </div>`;
} catch (err) {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field can not be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter valid country</h3>`;
      }
   console.error(err.message);
    throw err;
  }
}
