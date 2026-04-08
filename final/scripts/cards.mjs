import { displayTrailDetails } from "./modals.mjs";

// Create and populate cards with trail info

export function displayTrails(trails) {
    const trailGrid = document.querySelector("#trail-grid");
    trails.forEach((trail) => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h3");

        card.setAttribute("class", "card")
        img.setAttribute("src", trail.img);
        img.setAttribute("alt", trail.name);
        img.setAttribute("width", "300");
        img.setAttribute("height", "400");
        img.setAttribute("loading", "lazy");
        name.textContent = trail.name;

        card.appendChild(img);
        card.appendChild(name);

        card.addEventListener("click", () => {
            displayTrailDetails(trail);
        });

        trailGrid.appendChild(card);




    })
}