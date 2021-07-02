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




  var swiperTabsControl = new Swiper(".section-hero__tab-activators", {  
    slidesPerView: 6,
    direction:'vertical',
    cssMode: true,

  });




var swiperTabs = new Swiper(".section-hero__swiper", { 
    pagination: {
      el: ".section-hero__swiper-pagination",
    } ,
    thumbs: {
      swiper: swiperTabsControl
    }
 
  });


