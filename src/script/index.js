import '../styles/main.scss';

const hamburgerBtn = document.getElementById('hamburger-btn');
let isMenuOpen = false;
hamburgerBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar_nav-links');
    const authLinks = document.querySelector('.navbar_auth-links');

    if (window.innerWidth < 768) {
        // mobile view
        if (isMenuOpen) {
            // menu is open
            navLinks.style.display = 'none';
            authLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
            authLinks.style.display = 'block';
        }
    } else if (window.innerWidth < 1200) {
        if (isMenuOpen) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }
    isMenuOpen = !isMenuOpen;
});
