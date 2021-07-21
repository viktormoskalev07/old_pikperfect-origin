setTimeout(() => {
    if(document.querySelector('.lazy-video')){ 
      const videoPreloader = document.querySelector('.lazy-video__preloader'); 
      const video=document.querySelector('.lazy-video__activator-js');                  
         video.src=video.dataset.src;  
      setTimeout(() => {
        videoPreloader.style.opacity=0;
      }, 300);   
    }
   }, baseDelay2); 
   