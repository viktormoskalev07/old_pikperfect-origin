var swiper = new Swiper(".section-reviews__swiper", {
    loop:true,
    autoplay: {
        delay: 3000,
      },
    navigation: {
      nextEl: ".section-reviews__button-next",
      prevEl: ".section-reviews__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 115
      },
    }
  });




  var swiperTabsControl = new Swiper(".section-hero__tab-activators", {  
    slidesPerView: 6,
    direction:'vertical',
    cssMode: true,
    spaceBetween: 15

  });
 


var swiperTabs = new Swiper(".section-hero__swiper", { 
    pagination: {
      el: ".section-hero__swiper-pagination",
      clickable: true
    } ,
    thumbs: {
      swiper: swiperTabsControl
    } 
  });


