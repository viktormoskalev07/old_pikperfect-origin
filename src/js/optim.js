                 //fonts 
                 function addFont(){
                    setTimeout(() => {
                      const globalFont= document.createElement('link');
                      const  FontStat= document.createElement('link');
                      FontStat.rel='preconnect';
                      FontStat.href='https://fonts.gstatic.com';
                      globalFont.rel='stylesheet';
                      globalFont.href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Spectral:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap';
                      document.querySelector('head').append(FontStat);
                      document.querySelector('head').append(globalFont);
                    }, 1);  
                } 
                  //fonts 
     
     
     //scripts
      function scriptAsync(timeout){
        const place = document.querySelector('#script-place');  
        function addScript(path){
            const someJs = document.createElement('script'); 
            someJs.src=path; 
            place.appendChild(someJs);       
        }  
        const swip = document.createElement('script');
        swip.src='js/swiper.min.js';

                setTimeout(() => {
                    place.appendChild(swip);
                }, timeout);
                
             swip.onload=function(){ 
             addScript('js/slider.js'); 
           } 
}
      

    window.addEventListener('load', function(){ 
        addFont();       
        scriptAsync(400);                
    })


 