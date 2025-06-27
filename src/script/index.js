import '../styles/main.scss';

const menuBtn = document.getElementById('js-menu-btn');
const navbar = document.getElementById('js-navbar');
const menuIcon = document.getElementById('js-menu-icon');
const menuItems = document.getElementsByClassName('navbar__item');
const imagePath = 'src/assets/images';
const openIcon = 'hamburger-btn.png';
const closeIcon = 'menu-close.png';

const handleMenuClick = (e) => {
    // checks whether the navbar has class navbar--active if does meaning the menu is in open state
    if (
        e.target.classList.contains('navbar__item') ||
        !navbar.classList.toggle('navbar--active')
    ) {
        menuIcon.src = `${imagePath}/${openIcon}`;
        // makes the body scrollable again
        document.body.style.overflow = 'initial';
        document.body.style.height = 'auto';
    } else {
        // menu is in closed state
        menuIcon.src = `${imagePath}/${closeIcon}`;
        // makes the other part of body not scrollable
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100dvh';
    }
};

menuBtn.addEventListener('click', handleMenuClick);
// convert to menuItems to array
const menuItemsList = Object.entries(menuItems).map((entry) => {
    return entry[1];
});
// apply event listener on each menuItem
menuItemsList.forEach((menuItem) => {
    menuItem.addEventListener('click', handleMenuClick);
});
