import { displayTrails } from "./cards.mjs";

// Link menu items to filtered array cards
const all = document.querySelector("#all");
const easy = document.querySelector("#easy");
const moderate = document.querySelector("#moderate");
const hard = document.querySelector("#hard");
const veryHard = document.querySelector("#very-hard");

// Display corresponding trails on page when button is clicked
async function getTrailData(){
    try {
        const response = await fetch("data/trails.json");
        const data = await response.json();

        displayTrails(data.trails);

        all.addEventListener("click", () => {
            
            displayTrails(data.trails);
        })

        easy.addEventListener("click", () => {
            displayTrails(data.trails.filter(trail => trail.difficulty == "Easy"));
        })

        moderate.addEventListener("click", () => {
            displayTrails(data.trails.filter(trail => trail.difficulty == "Moderate"));
        })

        hard.addEventListener("click", () => {
            displayTrails(data.trails.filter(trail => trail.difficulty == "Hard"));
        })

        veryHard.addEventListener("click", () => {
            displayTrails(data.trails.filter(trail => trail.difficulty == "Very Hard"));
        })

    } catch (error) {
        console.log("Error fetching data:", error);
    }

}

getTrailData();

// Display welcome message & dismiss it when "X" is clicked
const welcomeMessage = document.querySelector("#welcome-message");
const dismiss = document.querySelector("#dismiss-banner");

if (localStorage.getItem("hideWelcome") === "true") {
    welcomeMessage.classList.add("hidden");
}

dismiss.addEventListener("click", () => {
    welcomeMessage.classList.add("hidden");
    localStorage.setItem("hideWelcome", "true");
})