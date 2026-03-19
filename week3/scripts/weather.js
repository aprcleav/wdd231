// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#description");
const town = document.querySelector("#town");
const country = document.querySelector("#country");

// Create required variables for url
const key = "8953725fbbccdfa08ac4e302a3b49823";
const lat = "49.75";
const long = "6.64";

// Construct a full path using template literals
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`

// Full path without template literals looks like this:
// const url = `//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=8953725fbbccdfa08ac4e302a3b49823`

// Try to grab current weather data

async function apiFetch()
{
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Display the JSON data onto webpage
function displayResults(data) {
    town.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    weatherDescription.textContent = `${desc}`;
}

// Start the process
apiFetch();