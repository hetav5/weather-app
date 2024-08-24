const APIKey = "f0cc119d508d9d25c0f0d57235df2399";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chennai";

async function checkweather(city){
    const response = await fetch(APIurl + city + `&appid=${APIKey}`);
    var data = await response.json();
    console.log(data);  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
}
checkweather();
