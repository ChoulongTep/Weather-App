const search_btn = document.querySelector("#search-btn");
const search_input = document.querySelector("#search-box");

const weather_Icon = document.getElementById("weather-icon");
const weather_Status = document.getElementById("weather-status");
const container = document.querySelector(".container");


/* API KEYS */
const apiKey = "dbc32614c5a14123aa21e9d61f760af2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?unit=standard&q=`;

async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();

    if(res.status == 404 || search_input.value == "") {
        document.querySelector(".invalid-container").style.display = "block";
        document.querySelector(".weather-container").style.display = "none";
    } else {
        document.querySelector(".weather-container").style.display = "block";
        document.querySelector(".invalid-container").style.display = "none";

        document.querySelector("#temp").innerHTML = Math.ceil(data.main.temp - 273.15) + "℃";
        document.querySelector("#current-location").innerHTML = data.name;

        document.querySelector("#humidity-txt").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind-speed-txt").innerHTML = data.wind.speed + "km/h";
        document.querySelector("#pressure-txt").innerHTML = (data.main.pressure * 0.029529).toFixed(2) + "hPa";

        if(data.weather[0].main == "Clouds") 
        {
            weather_Icon.src = "images/clouds.png";
            weather_Status.innerHTML = "Clouds";
        } 
        else if(data.weather[0].main == "Rain") 
        {
            weather_Icon.src = "images/rain.png";
            weather_Status.innerHTML = "Rain";
        } 
        else if (data.weather[0].main == "Clear") 
        {   
            weather_Icon.src = "images/clear.png";
            weather_Status.innerHTML = "Clear";
        } 
        else if(data.weather[0].main == "Drizzle") 
        {
            weather_Icon.src = "images/drizzle.png";
            weather_Status.innerHTML = "Drizzle";
        } 
        else if(data.weather[0].main == "Mist") 
        {
            weather_Icon.src = "images/mist.png";
            weather_Status.innerHTML = "Mist";
        }
        else if(data.weather[0].main == "Snow") 
        {
            weather_Icon.src = "images/snow.png";
            weather_Status.innerHTML = "Snow";
        }

        console.log(data);
    }
}

search_btn.addEventListener("click", () => {
    checkWeather(search_input.value);
});