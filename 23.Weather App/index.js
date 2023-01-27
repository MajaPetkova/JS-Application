const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

const apiKey = "3265874a2c77ae4a04bb96236a642d2f";
const url = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;


async function getWeatherByLocation(location) {
  const res = await fetch(url(location), { origin: "cors" });
  const data = await res.json();
  //   console.log(data.name, KtoC(data.main.temp));

  addWeatherToPage(data);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
<small>There are</small>
<h2>${temp}°C</h2>
<p>${data.name} </p>
`;
  main.innerHTML="";
  main.appendChild(weather);
}

function KtoC(k) {
  return (k - 273.15).toFixed(1);
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
