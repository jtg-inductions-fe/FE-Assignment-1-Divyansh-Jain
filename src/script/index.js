import '../styles/main.scss';

const menuBtn = document.getElementById('js-menu-btn');
const navbar = document.getElementById('js-navbar');
const menuIcon = document.getElementById('js-menu-icon');
const menuNav = document.getElementById('js-menu-nav');
const menuAuth = document.getElementById('js-menu-auth');
const imagePath = 'src/assets/images';
const openIcon = 'hamburger-btn.png';
const closeIcon = 'menu-close.png';

const handleMenuClick = () => {
    // checks whether the navbar has class navbar--active if does meaning the menu is in open state
    if (!navbar.classList.toggle('navbar--active')) {
        navbar.classList.remove('navbar--active');
        menuIcon.src = `${imagePath}/${openIcon}`;
        // makes the body scrollable again
        document.body.style.overflow = 'initial';
        document.body.style.height = 'auto';
    } else {
        // menu is in closed state
        menuIcon.src = `${imagePath}/${closeIcon}`;
        navbar.classList.add('navbar--active');

        // makes the other part of body not scrollable
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100dvh';
    }
};

menuBtn.addEventListener('click', handleMenuClick);

const handleMenuItemClick = (e) => {
    if (e.target.tagName == 'BUTTON' || e.target.tagName == 'A') {
        handleMenuClick();
    }
};

menuAuth.addEventListener('click', handleMenuItemClick);
menuNav.addEventListener('click', handleMenuItemClick);
