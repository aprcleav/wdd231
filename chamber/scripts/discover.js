import { places } from "../data/places.mjs"
console.log(places);

function displayPlaces(places) {
    const discoverCards = document.querySelector("#discover-cards");
    places.forEach((place) => {
        let card = document.createElement("section");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        img.setAttribute("src", place.photo_url);
        img.setAttribute("alt", place.name);
        img.setAttribute("width", "300");
        img.setAttribute("height", "300");
        img.setAttribute("loading", "lazy");
        address.textContent = place.address;
        name.textContent = place.name;
        description.textContent = place.description;
        button.textContent = "Learn More";
        button.setAttribute("id", "discover-button");

        card.appendChild(figure);
        figure.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        discoverCards.appendChild(card);

    });
}

displayPlaces(places);

// Convert days to miliseconds
const msToDays = 86400000;
// Get current date as miliseconds
const now = Date.now();
// Get saved timestamp
const lastVisit = localStorage.getItem("lastVisit");
const message = document.querySelector("#display-message");

if (!lastVisit) {
    // Display message if first visit
    message.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>`;
}
else {
    // Calculate time since last visit
    const timeSinceLastVisit = now - parseInt(lastVisit);

    if (timeSinceLastVisit < msToDays) {
        // Display message if user is back in less than a day
        message.innerHTML = `<p>Back so soon! Awesome!</p>`;
    }
    else {
        const days = Math.floor(timeSinceLastVisit / msToDays);
        console.log(days);
        if (days == 1)
        {
            // Display message is user is back in one day
            message.innerHTML = `<p>It has been ${days} day since your last visit.</p>`;
        }
        else {
            // Display message if user id back in multiple days
            message.innerHTML = `<p>It has been ${days} days since your last visit.</p>`;
        }
        
    }
}

// Update timestamp
localStorage.setItem("lastVisit", now);