function videoInSlider(){
    let checkVideo =1 ;
    const videoSlide = document.querySelector('.hero-video-slide');
      swiperTabs.on('slideChange', function(){
        console.log(videoSlide.matches('.swiper-slide-active'))
          setTimeout(() => {
            console.log(videoSlide.matches('.swiper-slide-active'))
          }, 100);
        if (checkVideo&&videoSlide){
    
            if(videoSlide.matches('.swiper-slide-next')||videoSlide.matches('.swiper-slide-active')){
              console.log(videoSlide.matches('.swiper-slide-next')||videoSlide.matches('.swiper-slide-active')) 
                          video=document.getElementById('hero-video'); 
                          video.src=video.dataset.src;
                          videoScript=  document.getElementById('hero-video-script'); 
                          videoScript.src='https://player.vimeo.com/api/player.js'; 
                          checkVideo=0;
            } 
        } 
      });
} 

videoInSlider();
// in slider js

