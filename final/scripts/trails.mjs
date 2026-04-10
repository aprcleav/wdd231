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

// ToDo: Fix local storage & display message
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");
const message = document.querySelector("#display-message");

if (!localStorage.getItem('hideContactPrompt')) {
    message.innerHTML = `<p>Welcome! Don't hesitate to if you have any questions: <a href="contact.html">Send a Message</a></p>`;
} else {
    localStorage.setItem("returning")
}


localStorage.setItem(lastVisit, now);