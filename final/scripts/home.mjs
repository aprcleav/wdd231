import { displayTrails } from "./cards.mjs";

// Display top trails on home Page

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