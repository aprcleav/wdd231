const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialogBox.showModal();
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})