// The following handles toggling the hamburger menu. 
const hamburger = document.querySelector('[data-collapse-toggle]');
const navbar = document.getElementById(hamburger.dataset.collapseToggle);
const navbarLinks = navbar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
    }
);

navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.add('hidden');
    });
});