// Hamburger & Nav Bar

const navButton = document.querySelector('#ham-button');
const navBar = document.querySelector('#nav-bar');
const navLinks = document.querySelectorAll('#nav-bar li');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});






