// Set date and time for timestamp
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date();
}

// Set up modals
const npButton = document.querySelector("#np-button");
const bronzeButton = document.querySelector("#bro-button");
const silverButton = document.querySelector("#sil-button");
const goldButton = document.querySelector("#gol-button");

const dialogBox = document.querySelector("#dialog-box");
const dialogBoxText = document.querySelector("#dialog-box div");
const closeButton = document.querySelector("#close-button");

// Attach "Learn More" buttons to modals
npButton.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <p><strong>Benefts:</strong> Special events and training<p>
    <p><strong>Price:</strong> Free<p>
    `
    dialogBox.showModal();
})

bronzeButton.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <p><strong>Benefts:</strong> Special events, training, and event discounts<p>
    <p><strong>Price:</strong> $450/year<p>
    `
    dialogBox.showModal();
})

silverButton.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <p><strong>Benefts:</strong> Special events, training, event discounts, and website spotlight<p>
    <p><strong>Price:</strong> $750/year<p>
    `
    dialogBox.showModal();
})

goldButton.addEventListener("click", () => {
    dialogBoxText.innerHTML = `
    <p><strong>Benefts:</strong> Special events, training, event discounts, website spotlight, member mailing list and ribbon cutting<p>
    <p><strong>Price:</strong> $1500/year<p>
    `
    dialogBox.showModal();
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})