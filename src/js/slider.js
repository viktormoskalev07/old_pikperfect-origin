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
        spaceBetween: 100
      },
      1400: {
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
let checkVideo =1 ;
const videoSlide = document.querySelector('.hero-video-slide');
  swiperTabs.on('slideChange', function(){
    if (checkVideo){

        if(videoSlide.matches('.swiper-slide-next')||videoSlide.matches('.swiper-slide-active')){
          console.log(videoSlide.matches('.swiper-slide-next')||videoSlide.matches('.swiper-slide-active')) 
                      video=document.getElementById('hero-video');
                      console.log(video.dataset.src);
                      video.src=video.dataset.src;
                      videoScript=  document.getElementById('hero-video-script'); 
                      videoScript.src='https://player.vimeo.com/api/player.js'; 
                      checkVideo=0;
        } 
    } 
  });