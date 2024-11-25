
const apiKey = "88fea2d5d93a0ffb9aa73c1a6ae0b5c8"; 
const getWeatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherInfo = document.getElementById("weatherInfo");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

getWeatherButton.addEventListener("click", function() {
    const city = cityInput.value.trim();
    
    if (city === "") {
        alert("Veuillez entrer une ville.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ville non trouvée.");
            }
            return response.json();
        })
        .then(data => {
            const { name, weather, main } = data;

            locationElement.textContent = `${name}, ${data.sys.country}`;
            temperatureElement.textContent = `Température : ${main.temp}°C`;
            descriptionElement.textContent = `Description : ${weather[0].description}`;

            weatherInfo.style.display = "block";
        })
        .catch(error => {
            alert(error.message);
            weatherInfo.style.display = "none";
        });
});
