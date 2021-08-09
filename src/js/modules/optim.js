 
                  
     //scripts 
     function addScript(path ,stimeout){  
      if(localStorage.getItem(path)) {
        stimeout=1; 
      } 
      const scriptPlace = document.body; 
      const someJs = document.createElement('script'); 
      someJs.async=true;
      someJs.src=path;  
      setTimeout(() => {
        scriptPlace.append(someJs);   
      localStorage.setItem(path , true);
    }, stimeout);     
        return ( 
            someJs 
        ) 
  }   
 
window.addEventListener('load', function(){   
const mediaQuery2 = window.matchMedia('(max-width: 480px)').matches;  
  let swiperLoadingDelay=1; 
  const swipDelay = document.querySelector('.swiper-delay'); 
  if(swipDelay){ 
    const addtime= parseInt(swipDelay.dataset.time);
    if(addtime>100){
      swiperLoadingDelay=1+ addtime/5;
      if (mediaQuery2) {
        swiperLoadingDelay =addtime;
      } 
    } 
  }  
  addScript('js/swiper.min.js' , swiperLoadingDelay).addEventListener('load',()=>{
    addScript('js/slider.js' , 0);
 }) 
 
 
  addScript('//code.jquery.com/jquery-1.11.2.min.js' , 6000).addEventListener('load',()=>{ 
    addScript('js/jqueryWorksHere.js' , 0);
 })  
// lazy-video 
         @@include('lazy-video.js')    
});




 