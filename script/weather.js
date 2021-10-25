const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=c485ab7034c2191b4a4eb125ea4f0584&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${data.main.humidity}%`
  wind.textContent = `Wind speed: ${data.wind.speed} m/s`
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

function setLocalStorage() {
  const city = document.querySelector('.city')

  localStorage.setItem('city', city.value);

}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  const city = document.querySelector('.city')


  city.value = localStorage.getItem('city');

}
window.addEventListener('load', getLocalStorage)
window.onload = getWeather;

