
if (document.querySelector('.swiperDescription')){
  var swiper = new Swiper(".swiperDescription", {
    pagination: {
      el: ".swiperDescription-pagination",
      clickable: true
    } ,
         
  grabCursor:true,	
  autoplay: {
      delay: 3000,
    } 
});
}

if (document.querySelector('.swiperalbum')){
  var swiper = new Swiper(".swiperalbum", {
    pagination: {
      el: ".swiperalbum-pagination",
      clickable: true
    } ,
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
        slidesPerView: 4,
        spaceBetween: 5
      }, 
    }, 
});
}
 





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

  @@include('../video-include/video.js')

  function videoInSlider(){
    let checkVideo =1 ;
    const videoSlide = document.querySelector('.hero-video-slide'); 
    const videoPreloader = document.querySelector('.hero-video-slide__preloader'); 
    
  function call (){
    if (checkVideo&&videoSlide){ 
      if( videoSlide.matches('.swiper-slide-active')){ 
                    video=document.getElementById('hero-video'); 
                    video.src=video.dataset.src; 
                    checkVideo=0;
                    setTimeout(() => {
                      videoPreloader.style.opacity=0;
                    }, 1000);
                   
                    observer.disconnect();
      } 
  }  
  }
  const observer = new MutationObserver(call)  
  observer.observe(videoSlide, {
    childList:false,
    attributes:true,
    characterData:false,
    attributeFilter:['class']
  })
     
} 

videoInSlider();
      