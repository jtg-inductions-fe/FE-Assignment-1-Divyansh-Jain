import '../styles/main.scss';

const menuBtn = document.querySelector('.navbar_hamburger-btn');
const navLinks = document.querySelector('.navbar_nav-links');
const authBtns = document.querySelector('.navbar_auth-btns');
const menuCloseIcon = document.querySelector('.navbar_hamburger-btn--close');
const menuOpenIcon = document.querySelector('.navbar_hamburger-btn--open');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (isMenuOpen) {
        // menu is in open state and is closed by button click
        navLinks.className = 'navbar_nav-links--open';
        authBtns.className = 'navbar_auth-btns--open';
        menuCloseIcon.className = 'navbar_hamburger-btn--close';
        menuOpenIcon.className = 'navbar_hamburger-btn--open hidden';
        // document.body.style.overflow = "hidden " is used to disable scroll when the menu is in open state
        document.body.style.overflow = 'hidden';
    } else {
        // menu is in closed state
        navLinks.className = 'navbar_nav-links';
        authBtns.className = 'navbar_auth-btns';
        menuCloseIcon.className = 'navbar_hamburger-btn--close hidden';
        menuOpenIcon.className = 'navbar_hamburger-btn--open';
        document.body.style.overflow = 'auto';
    }
    isMenuOpen = !isMenuOpen;
});
