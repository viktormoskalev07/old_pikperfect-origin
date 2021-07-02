var swiper = new Swiper(".section-reviews__swiper", {
    loop:true,
    autoplay: {
        delay: 1000,
      },
    navigation: {
      nextEl: ".section-reviews__button-next",
      prevEl: "section-reviews__button-prev",
    },
  });