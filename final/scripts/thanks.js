// Display form info from URL on page
const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo);

const name = formInfo.get("name");
const email = formInfo.get("email");
const trail = formInfo.get("trail");
const experience = formInfo.get("experience");

document.querySelector("#results").innerHTML = `
<p class="result-text">Your message has been sent. Please allow 24-48 hours for a reply.</p>
<br>
<p><strong>Name: </strong>${name}</p>
<p><strong>Email: </strong>${email}</p>
<p><strong>Trail: </strong>${trail}</p>
<p><strong>Your Message: </strong>${experience}</p>

<br>
`
