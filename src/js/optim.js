  
                //fonts 

                // added to head in html 
                //  function addFont(timeout){
                //     setTimeout(() => {
                //       const globalFont= document.createElement('link');
                //       const  FontStat= document.createElement('link');
                //       FontStat.rel='preconnect';
                //       FontStat.href='https://fonts.gstatic.com';
                //       globalFont.rel='stylesheet';
                //       globalFont.href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Spectral:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap';
                //       document.querySelector('head').append(FontStat);
                //       document.querySelector('head').append(globalFont);
                //       localStorage.setItem('font', '1');
                //     }, timeout);  
                // } 
                //   if(localStorage.getItem('font')){
                //     addFont(0);
                //     console.log(mediaQuery2.matches); 
                //   }else{
                //     if(window.matchMedia('(max-width: 480px)').matches){
                //       addFont(1000);
                //     } else{
                //       addFont(0);
                //     }  
                //   }
                  //fonts 


                  
     //scripts 
     function addScript(path ,stimeout){ 
      const scriptPlace = document.querySelector('#script-place'); 
      const someJs = document.createElement('script'); 
      someJs.async=true;
      someJs.src=path;  
      setTimeout(() => {
        scriptPlace.appendChild(someJs);  
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
 
  addScript('//code.jquery.com/jquery-1.11.2.min.js' , 1000).addEventListener('load',()=>{ 
    addScript('js/jqueryWorksHere.js' , 0);
 })  
// lazy-video 
         @@include('modules/lazy-video.js')    
})




 