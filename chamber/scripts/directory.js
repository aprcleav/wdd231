const url = "chamber/data/members.json";
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

function showGrid() {
    display.classList.add("grid");
    display.classList.remove("list");
}

listButton.addEventListener("click", showList);
gridButton.addEventListener("click", showGrid);

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members)
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

function displayMembers(members) {
    const cards = document.querySelector("#cards");
    members.forEach((member) => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        img.setAttribute("src", member.img);
        img.setAttribute("alt", member.name);
        img.setAttribute("width", "300");
        img.setAttribute("loading", "lazy");
        address.textContent = member.address;
        phone.textContent = member.phone;
        name.textContent = member.name;
        name.setAttribute("class", "bold");
        url.textContent = member.url;
        url.setAttribute("href", member.url);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        cards.appendChild(card);

    });
}

getMemberData();