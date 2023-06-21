// Variaveis e selecao de elementos
const apiKey = "ba0ed798b46f1b88b59226e7505deaa3";
const apiCountryURL = "https://flagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


// funcoes



//eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;
    console.log(city);
})
