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

  slidesPerView: 4,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export { swiper };
