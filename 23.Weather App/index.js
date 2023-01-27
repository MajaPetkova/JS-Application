const apiKey = "3265874a2c77ae4a04bb96236a642d2f";

getWeatherByLocation("Berlin");
async function getWeatherByLocation(location) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  );
  const data = await res.json();
  console.log(data, KtoC(data.main.temp));
}
function KtoC(k) {
  return (k-273.15).toFixed(1)
}
