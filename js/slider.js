const menu = new Swiper(".menu__slider", {
  loop: true,
  effect: "fade",
  autoplay: true,
  speed: 1000,
  grabCursor: false,
  simulateTouch: false,
  autoplay: {
    delay: 6000,
  },
});

const interior = new Swiper(".interior-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__interior-btn-next",
    prevEl: ".slider-navigation__interior-btn-prev",
  },

  spaceBetween: 46,
});

const food = new Swiper(".food-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__food-btn-next",
    prevEl: ".slider-navigation__food-btn-prev",
  },

  spaceBetween: 46,
});

const guests = new Swiper(".guests-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__guests-btn-next",
    prevEl: ".slider-navigation__guests-btn-prev",
  },

  spaceBetween: 46,
});

const news = new Swiper(".article__slider", {
  loop: true,
  speed: 600,
  effect: "fade",

  navigation: {
    nextEl: ".slider-navigation__news-btn-next",
    prevEl: ".slider-navigation__news-btn-prev",
  },
});