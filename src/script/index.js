import '../styles/main.scss';

const menuBtn = document.getElementById('js-menu-btn');
const navbar = document.getElementById('js-navbar');
const menuIcon = document.getElementById('js-menu-icon');
const imagePath = 'src/assets/images';
const openIcon = 'hamburger-btn.png';
const closeIcon = 'menu-close.png';
menuBtn.addEventListener('click', () => {
    if (!navbar.classList.toggle('navbar--active')) {
        navbar.className = 'navbar';
        menuIcon.src = `${imagePath}/${openIcon}`;
        document.body.style.overflow = 'scroll';
    } else {
        menuIcon.src = `${imagePath}/${closeIcon}`;

        navbar.className = 'navbar navbar--active';
        document.body.style.overflow = 'hidden';
    }
});
