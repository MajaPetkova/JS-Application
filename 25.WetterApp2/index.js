const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const apiKey = "d22404f3506ac02f1d31c07bc45168fc";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const res = await fetch(url + city + `&appid=${apiKey}`);

  if (res.status === 404) {
    error.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  const data = await res.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main === "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    icon.src = "images/mist.png";
  }
  error.style.display = "none";
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});
