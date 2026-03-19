// Fetch members.json
async function getMemberData() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        console.log(data.members);

        // Filter data to only Silver or Gold members
        const silverOrGold = data.members.filter(member => member.membershipLevel == 3 || member.membershipLevel == 2)

        // Shuffle for randomness
        const shuffled = silverOrGold.sort(() => 0.5 - Math.random());

        // Display 2 if screen is less than 600, display 3 if bigger (refreshes on page render)
        const displaySize = window.innerWidth < 608 ? 2 : 3;

        // Get 1st 2 or 3 members from random shuffled array
        const spotlightMembers = shuffled.slice(0, displaySize);
        displayMembers(spotlightMembers);

    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

function displayMembers(members) {
    const cards = document.querySelector(".spotlight");
    members.forEach((member) => {
        let card = document.createElement("div");
        let info = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let membership = document.createElement("p");

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
        if (member.membershipLevel == 2) {
            membership.textContent = "Silver Member"
        }
        else if (member.membershipLevel == 3) {
            membership.textContent = "Gold Member"
        }
        name.setAttribute("class", "name");
        info.setAttribute("class", "spotlight-info");
        card.setAttribute("class", "spotlight-card");

        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(img);
        card.appendChild(info);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(url);
        cards.appendChild(card);

    });
}

getMemberData();

