import '../styles/main.scss';

const menuBtn = document.getElementById('js-menu-btn');
const navbar = document.getElementById('js-navbar');
const menuIcon = document.getElementById('js-menu-icon');
const menuItems = document.getElementsByClassName('navbar__item');
const imagePath = 'src/assets/images';
const openIcon = 'hamburger-btn.png';
const closeIcon = 'menu-close.png';

const handleMenuClick = (e) => {
    if (
        // checks whether the navbar has class navbar--active if does meaning the menu is in open state
        // and also checks that the toggle is not triggered by auth btns
        e.target.classList.contains('navbar__item') ||
        !navbar.classList.toggle('navbar--active')
    ) {
        menuIcon.src = `${imagePath}/${openIcon}`;
    } else {
        // menu is in closed state
        menuIcon.src = `${imagePath}/${closeIcon}`;
    }
    // makes the other part of body  scrollable and not scrollable
    document.body.classList.toggle('no-scroll');
};

menuBtn.addEventListener('click', handleMenuClick);

// apply event listener on each menuItem
Array.from(menuItems).forEach((menuItem) => {
    menuItem.addEventListener('click', handleMenuClick);
});
