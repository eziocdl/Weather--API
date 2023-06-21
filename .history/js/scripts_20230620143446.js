// Variaveis e selecao de elementos
const apiKey = "ba0ed798b46f1b88b59226e7505deaa3";
const apiCountryURL = "https://flagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#desccription");
const weatherElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("wind span");

// funcoes

const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;

};

const showWeatherData = async (city) => {
    const data = getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather(0)

}



//eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    showWeatherData(city);

});
