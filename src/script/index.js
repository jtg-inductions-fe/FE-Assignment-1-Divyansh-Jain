import '../styles/main.scss';

const menuBtn = document.querySelector('.navbar_hamburger-btn');
const navLinks = document.querySelector('.navbar_nav-links');
const authBtns = document.querySelector('.navbar_auth-btns');
const menuCloseIcon = document.querySelector('.navbar_hamburger-btn--close');
const menuOpenIcon = document.querySelector('.navbar_hamburger-btn--open');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (isMenuOpen) {
        navLinks.className = 'navbar_nav-links--open';
        authBtns.className = 'navbar_auth-btns--open';
        menuCloseIcon.className = 'navbar-hamburger-btn--close';
        menuOpenIcon.className = 'navbar-hamburger-btn--open hidden';
    } else {
        navLinks.className = 'navbar_nav-links';
        authBtns.className = 'navbar_auth-btns';
        menuCloseIcon.className = 'navbar-hamburger-btn--close hidden';
        menuOpenIcon.className = 'navbar-hamburger-btn--open';
    }
    isMenuOpen = !isMenuOpen;
});
