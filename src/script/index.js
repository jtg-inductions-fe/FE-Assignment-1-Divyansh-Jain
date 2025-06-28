import '../styles/main.scss';
import mountCarousel from './carousel';
const menuBtn = document.getElementById('js-menu-btn');
const navbar = document.getElementById('js-navbar');
const menuIcon = document.getElementById('js-menu-icon');
const menuItems = document.getElementsByClassName('navbar__item');
const imagePath = 'src/assets/images';
const openIcon = 'hamburger-btn.png';
const closeIcon = 'menu-close.png';
const newsletterForm = document.forms['newsletter-form'];

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

// mounts  testimonial carousel
mountCarousel();

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.email.value;
    alert(`You have successfully subscribed with the email : ${email}`);
});
const accordionBtn = document.getElementsByClassName('accordion-card__header');

for (let i of accordionBtn) {
    i.addEventListener('click', accordionToggleFunction);
}

function accordionToggleFunction() {
    this.nextElementSibling.classList.toggle('active');
    this.children[1].classList.toggle('toggle-icon');
}
