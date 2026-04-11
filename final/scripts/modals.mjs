export function displayTrailDetails(trail) {
    const trailDetails = document.querySelector("#trail-details");
    trailDetails.innerHTML = `
    <img src="${trail.img}" alt="${trail.name}">
    <div class="trail-text">
        <h3>${trail.name}</h3>
        <address>${trail.location}</address>
        <p>${trail.description}</p>
        <p>${trail.distance}</p>
        <p>Difficulty: <strong>${trail.difficulty}</strong></p>
        <button id="closeModal" type="button">Close</button>
    </div>
    `;
    
    trailDetails.showModal();

    const closeModal = trailDetails.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        trailDetails.close();
    });
}