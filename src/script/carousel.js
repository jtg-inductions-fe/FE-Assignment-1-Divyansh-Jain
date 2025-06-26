import Splide from '@splidejs/splide';
var splide = new Splide('.splide', {
    classes: {
        arrows: 'splide__arrows testimonial__btns',
        prev: 'splide__arrow--prev your-class-prev testimonial__btn--next',
        arrow: 'splide__arrow  testimonial__btn',
        next: 'splide__arrow--next your-class-next testmonial__btn--prev',
    },
});

export default function mountCarousel() {
    splide.mount();
}
