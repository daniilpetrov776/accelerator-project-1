import Swiper from 'swiper/bundle';

const juriSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  init: false,
  loop: true,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const reviewsSwiper = new Swiper('.swiper2', {
  direction: 'horizontal',
  init: false,
  loop: false,
  simulateTouch: false,
  spaceBetween: 40,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
  },
});

export { juriSwiper, reviewsSwiper };
