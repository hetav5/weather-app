const APIKey = "f0cc119d508d9d25c0f0d57235df2399";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function checkweather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".visibility").innerHTML = (data.visibility / 1000) + " km";
    if (data.rain) {
        document.querySelector(".rain").innerHTML = 
            (data.rain['1h'] ? data.rain['1h'] + " mm (last 1 hour)" : 
             data.rain['3h'] ? data.rain['3h'] + " mm (last 3 hours)" : 
             "No rain data available");
    } else {
        document.querySelector(".rain").innerHTML = "No rain data available";
    }
    
    const sunriseTimestamp = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000); 
    document.querySelector(".sunrise").innerHTML = sunriseDate.toLocaleTimeString();

    const sunsetTimestamp = data.sys.sunset;
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    document.querySelector(".sunset").innerHTML = sunsetDate.toLocaleTimeString();
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

