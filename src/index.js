import axios from "axios";
function showCurrentWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
  let apikey = "0de40f3ac6t7b9b23817fc4oa7443d4f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentWeather);
}

function Submit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");
}

let SearchForm = document.querySelector("#search-form");
SearchForm.addEventListener("submit", Submit);
searchCity("Sydney");
