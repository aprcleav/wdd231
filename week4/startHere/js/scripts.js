const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const first = myInfo.get("first");
const last = myInfo.get("last");
const ordinance = myInfo.get("ordinance");
const date = myInfo.get("date");
const place = myInfo.get("location");
const phone = myInfo.get("phone");
const email = myInfo.get("email");

document.querySelector("#results").innerHTML = `
<p>Appointment for <strong>${first} ${last}</strong></P>
<p>Proxy ${ordinance} on ${date} in the ${place} Temple</p>
<p>Your phone: ${phone}</p>
<p>Your email: ${email}</p>`