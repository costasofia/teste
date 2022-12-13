const apiKey = "b1cfca8634e55c6dcf77b46589d29304";



const cityInput = document.querySelector("#cidade-input");
const searchButton = document.querySelector("#search");



const cityElement = document.querySelector("#city");
const temperaturaElement = document.querySelector("#temperatura span");
const descricaoElement = document.querySelector("#description");
const IconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");

const weatherContainer = document.querySelector("#weather-data");

const getWeatherData = async (city) => {


    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);

    return data;
};

const showWeatherData = async (city) => {
    console.log(city);
  const data =  await getWeatherData(city);
  cityElement.innerText = data.name;
  temperaturaElement.innerText = parseInt(data.main.temp);
  descricaoElement.innerText = data.weather[0].description;
  IconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  countryElement.setAttribute("src", `https://countryflagsapi.com/png/${data.sys.country}`);
  weatherContainer.classList.remove("hide");
}
searchButton.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});
