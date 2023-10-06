const apiKey = "3652100e85c95525bc6689d78ea002ec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            // document.querySelector(".Weather-icon").src="images/clouds.png";
            weatherIcon.src = 'clouds.png';
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

// how add enterkey on searchbtn toogle?
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

}); 
// searchBtn.addEventListener('keycode', (e) => {
//     if (e.keycode === 13) {
//         searchBtn.click();
//         // checkWeather(searchBox.value);
//     }

// });

// const input = document.getElementById('input');
// function Alert() {
//     alert(input.value);
// }

// input.addEventListener('keyup', (e) => {
//     if (e.keyCode === 13) {
//         Alert();
//     })
