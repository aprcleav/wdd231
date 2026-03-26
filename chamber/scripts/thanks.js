// Display form info from URL on page
const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo);

const first = formInfo.get("first");
const last = formInfo.get("last");
const title = formInfo.get("title");
const email = formInfo.get("email");
const phone = formInfo.get("phone");
const businessName = formInfo.get("business-name");
const level = formInfo.get("level");
const description = formInfo.get("description");
const timestamp = formInfo.get("timestamp");

document.querySelector("#results").innerHTML = `
<p><strong>Name: </strong>${first} ${last}</p>
<p><strong>Email: </strong>${email}</p>
<p><strong>Phone: </strong>${phone}</p>
<p><strong>Name of Business/Organization: </strong>${businessName}</p>
<br>
<p>${timestamp} <-- Format this to make it look nice</p>
`