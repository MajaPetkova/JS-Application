const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

const apiKey = "d22404f3506ac02f1d31c07bc45168fc";
const url = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

getWeatherByLocation("London")
async function getWeatherByLocation(location) {
  const res = await fetch(url(location), { origin: "cors" });
  const data = await res.json();
    console.log(data);

  addWeatherToPage(data);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
<h2>${temp} °C</h2>
<p>in ${data.name} </p>
<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
<p>${data.weather[0].main}</p>
`;
  main.innerHTML="";
  main.appendChild(weather);
}

function KtoC(k) {
  return Math.floor(k - 273.15);
}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const location = search.value;
  if (location) {
    getWeatherByLocation(location);
    search.value = "";
  } else {
    main.innerHTML = `Please enter a location`;
  }
});
