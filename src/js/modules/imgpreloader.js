

const mediaQuery = window.matchMedia('(max-width: 480px)');
let baseDelay = 100; 
if (mediaQuery.matches) {
       baseDelay = 800;
}   
function imgAdder(name ,path,sizes,pic){
 

       for (let i = 0; i < sizes.length-1; i++) {
              const size = sizes[i];
              const source = document.createElement('source');  
              if(!(size==sizes[sizes.length-2])){ 
                     source.media=`(max-width: ${size}px)`
              } 
              source.srcset=`images/towebp/${path}/${name}-${sizes[i+1]}.webp 2x ,    images/towebp/${path}/${name}-${size}.webp`;
              source.type='image/webp';
              const parent = pic.parentNode;
              parent.insertBefore(source, pic);
       }
      

} 
function toggleMinImg() {
       const pictures = document.querySelectorAll('.toggle-img--js');
       for (let i = 0; i < pictures.length; i++) {
              const pic = pictures[i];
              const img = pic.parentNode;
               const  name=img.dataset.name,
                     path=img.dataset.path,
                     sizes=[768,1440,2880];
             
                     setTimeout(() => {
                            imgAdder(name ,path,sizes,pic);   
                     }, img.dataset.priority*baseDelay);
               
               
       }
}  

toggleMinImg();