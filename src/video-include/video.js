
 

// in slider js


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
      