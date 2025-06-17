import '../styles/main.scss';

const menuBtn = document.querySelector('.navbar__hamburger-btn');
const navLinks = document.querySelector('.navbar__nav-links');
const authBtns = document.querySelector('.navbar__auth-btns');
const menuCloseIcon = document.querySelector('.navbar__hamburger-btn--close');
const menuOpenIcon = document.querySelector('.navbar__hamburger-btn--open');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if (isMenuOpen) {
        // menu is in open state and is closed by button click
        navLinks.className = 'navbar__nav-links--open';
        authBtns.className = 'navbar__auth-btns--open';
        menuCloseIcon.className = 'navbar__hamburger-btn--close';
        menuOpenIcon.className = 'navbar__hamburger-btn--open hidden';
        // document.body.style.overflow = "hidden " is used to disable scroll when the menu is in open state
        document.body.style.overflow = 'hidden';
    } else {
        // menu is in closed state
        navLinks.className = 'navbar__nav-links';
        authBtns.className = 'navbar__auth-btns';
        menuCloseIcon.className = 'navbar__hamburger-btn--close hidden';
        menuOpenIcon.className = 'navbar__hamburger-btn--open';
        document.body.style.overflow = 'auto';
    }
    isMenuOpen = !isMenuOpen;
});
