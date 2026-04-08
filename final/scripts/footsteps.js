import { displayTrails } from "./cards.mjs";

// Hamburger & Nav Bar

const navButton = document.querySelector('#ham-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Footer Date & Last Modified

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear()
document.getElementById("last-modified").innerHTML = document.lastModified;

// Home Page

async function getTrailData(){
    try {
        const response = await fetch("data/trails.json");
        const data = await response.json();
        displayTrails(data.trails.filter(trail => trail.rating == "5"));
    } catch (error) {
        console.log("Error fetching data:", error);
    }

}

getTrailData();