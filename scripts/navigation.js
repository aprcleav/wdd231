// Hamburger & Nav Bar

const navButton = document.querySelector('#ham-button');
const navBar = document.querySelector('#nav-bar');
const navLinks = document.querySelectorAll('#nav-bar a');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Adds active class to whichever navigation link is clicked (for wayfinding)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});






