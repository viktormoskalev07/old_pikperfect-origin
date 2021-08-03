
if (document.querySelector('.swiperDescription')){
  var swiper = new Swiper(".swiperDescription", {
    pagination: {
      el: ".swiperDescription-pagination",
      clickable: true
    } ,
         
  grabCursor:true,	 
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
      992: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 35
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


  var swiper = new Swiper(".section-reviews-card__wrap", {
    loop:true,
    autoplay: {
        delay: 3000,
      },
    navigation: {
      el: ".swiperalbum-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32
      },
    }
  });


 


  function videoInSlider(){ 
    const videoSlide = document.querySelector('.hero-video-slide'); 
    const videoPreloader = document.querySelector('.hero-video-slide__preloader'); 
    const video=document.getElementById('hero-video'); 
    let checkVideo =1 ;
  function call (){ 
        if (checkVideo&&videoSlide){ 
          if( videoSlide.matches('.swiper-slide-active')){ 
                        
                        video.src=video.dataset.src; 
                        checkVideo=0;
                        setTimeout(() => {
                          videoPreloader.style.opacity=0;
                        }, 300); 
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

     setTimeout(() => {
       if(checkVideo){
        video.src=video.dataset.src; 
        checkVideo=0;
        setTimeout(() => {
          videoPreloader.style.opacity=0;
        }, 300); 
        observer.disconnect();
       }
     }, 2000);
} 


 
if (document.querySelector('.section-hero__tab-activators')){ 
  var swiperTabsControl = new Swiper(".section-hero__tab-activators", {  
    slidesPerView: 6,
    direction:'vertical',
    cssMode: true,
    spaceBetween: 15,
    allowTouchMove:false, 
    touchStartForcePreventDefault:true,
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
    videoInSlider(); 
}


 
  const   Gallery = new Swiper(".swiperGallery", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 