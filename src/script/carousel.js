import Splide from '@splidejs/splide';
const splide = new Splide('.splide', {
    classes: {
        arrows: 'splide__arrows testimonial__btns',
        prev: 'splide__arrow--prev testimonial__btn--next',
        arrow: 'splide__arrow  testimonial__btn',
        next: 'splide__arrow--next  testmonial__btn--prev',
    },
    type: 'loop',
});

export default function mountCarousel() {
    splide.mount();
}
