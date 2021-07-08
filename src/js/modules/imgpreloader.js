const mediaQuery = window.matchMedia('(max-width: 480px)');
let baseDelay = 200;
if (mediaQuery.matches) {
       baseDelay = 300;
}  
function srcSeter(tag) {
       tag.srcset = tag.dataset.img;
}

function fullQuality(item,sizes) {
       const priority = item.dataset.priority || 0;
       setTimeout(function () { 
              srcSeter(item.querySelector('.nowebp-img')); 
              srcSeter(item.querySelector('.webp-img'));
              sizes.forEach(function(siz) {
                     srcSeter(item.querySelector('.webp-img-'+siz));
              }); 
       }, 1 + baseDelay * priority);
}

function toggleMinImg() {
       const pictures = document.querySelectorAll('.toggle-img--js');
       for (let i = 0; i < pictures.length; i++) {
              const pic = pictures[i];
              fullQuality(pic , [376,480]);
       }
}  

toggleMinImg();