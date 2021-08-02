
let videoTimeout=100;
if(mediaQuery2){
  videoTimeout=2000;
} 
setTimeout(() => {
    if(document.querySelector('.lazy-video')){ 
      const videoPreloader = document.querySelector('.lazy-video__preloader'); 
      const video=document.querySelector('.lazy-video__activator-js');                  
         video.src=video.dataset.src;  
      setTimeout(() => {
        videoPreloader.style.opacity=0;
      }, 300);   
    }
   }, videoTimeout); 
   