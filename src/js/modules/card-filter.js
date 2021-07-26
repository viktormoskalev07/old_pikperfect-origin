 (
     function(){
              const radiocontainer = document.querySelector('.photobook__radio__container');
              const card = document.querySelectorAll('.filtered-card-js');
             
              if(radiocontainer&&card){
                  
                    radiocontainer.addEventListener('change' , function(e){
                         card.forEach((item)=>{
                     
                             if(!(item.dataset.type==e.target.value)&&!(e.target.value=='All')){
                                item.classList.add('card-hide');
                          
                             } else {
                                item.classList.remove('card-hide')
                                
                             }
                         }) 
                    }) 
              }

     }()
 )