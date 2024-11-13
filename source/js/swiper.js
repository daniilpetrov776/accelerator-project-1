import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  init: false,
  loop: true,
  simulateTouch: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // navigation: false,
      // spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1366: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },

  // slidesPerView: 4,
  // spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export { swiper };
