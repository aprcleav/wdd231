
// Footer Date & Last Modified

const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = today.getFullYear()
document.getElementById("last-modified").innerHTML = document.lastModified;