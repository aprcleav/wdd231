import { temples } from "../data/temples.js"
console.log(temples);

import { url } from "../data/temples.js"
console.log(url);

// Get reference to the div where we display items
const showHere = document.querySelector("#showHere");

// Get reference to the dialog element
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");

myclose.addEventListener("click", () => mydialog.close());

// Loop through array of JSON items
function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        // Add event listener to each div on the page
        photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo);
    }); 
}
// Populate dialog with info when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.`
    mydialog.showModal();
}

displayItems(temples);