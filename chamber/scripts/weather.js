const key = "8953725fbbccdfa08ac4e302a3b49823";
const lat = "47.80";
const lon = "-122.50";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

// Fetch weather API
async function weatherFetch()
{
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
            console.log("Error fetching data:", error);
        }
    
}

// Display data from weather API
function displayWeather(data)
{
    const weatherCard = document.querySelector(".weather-flex");
    const icon = document.createElement("img");
    const info = document.createElement("div");
    const temp = document.createElement("p");
    const desc = document.createElement("p");
    const humidity = document.createElement("p");

    temp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    temp.setAttribute("class", "temp");
    desc.innerHTML = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
    icon.setAttribute("src", iconSrc);
    icon.setAttribute("alt", data.weather[0].description);
    info.setAttribute("class", "weather-info");
    humidity.innerHTML = `Humidity: ${data.main.humidity}`

    weatherCard.appendChild(icon);
    weatherCard.appendChild(info);
    info.appendChild(temp);
    info.appendChild(desc);
    info.appendChild(humidity);
}

weatherFetch();

// Fetch forecast API
async function forecastFetch() {
    try {
        const response2 = await fetch(forecastUrl);
        if (!response2.ok) {
            throw new Error(`Response status: ${response2.status}`);
        }
        const data2 = await response2.json();
        console.log(data2);
        displayForecast(data2);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Display data from forecast API
function displayForecast(data2)
{
    // Get day of week
    const date = new Date();
    let day1 = date.getDay();

    // Get name of day using array
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const firstDay = document.querySelector("#day1");
    const secondDay = document.querySelector("#day2");
    const thirdDay = document.querySelector("#day3");

    // Display day of week with temperature data using the index for each day. Data is collected every 3 hours, so every 8th line would be a new day (indexes 0, 7, and 15).
    firstDay.innerHTML = `Today: <strong>${Math.round(data2.list[0].main.temp)}&deg;F<strong/>`;
    secondDay.innerHTML = `${daysOfWeek[(day1 + 1) % 7]}: <strong>${Math.round(data2.list[7].main.temp)}&deg;F</strong>`;
    thirdDay.innerHTML = `${daysOfWeek[(day1 + 2) % 7]}: <strong>${Math.round(data2.list[15].main.temp)}&deg;F</strong>`;

}

forecastFetch();