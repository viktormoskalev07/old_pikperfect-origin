function videoInSlider(){
    let checkVideo =1 ;
    const videoSlide = document.querySelector('.hero-video-slide');
      swiperTabs.on('slideChangeTransitionEnd', function(){
        // console.log(videoSlide.matches('.swiper-slide-active'))
          setTimeout(() => {
            // console.log(videoSlide.matches('.swiper-slide-active'))
          }, 100);
        if (checkVideo&&videoSlide){
    
            if( videoSlide.matches('.swiper-slide-active')){
              
                          video=document.getElementById('hero-video'); 
                          video.src=video.dataset.src;
                          videoScript=  document.getElementById('hero-video-script'); 
                          videoScript.src='https://player.vimeo.com/api/player.js'; 
                          checkVideo=0;
            } 
        } 
      });

      document.addEventListener('DOMContentLoaded' , function(){
        function call (mutations , observer){
          console.log(mutations);
        }
        const observer = new MutationObserver(call) 

        observer.observe(videoSlide, {
          childList:false,
          attributes:true,
          characterData:false
        })
      })
} 

videoInSlider();


// in slider js

