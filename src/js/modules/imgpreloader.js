 

const mediaQuery = window.matchMedia('(max-width: 480px)');
let baseDelay = 10;
if (mediaQuery.matches) {
       baseDelay = 300;
}

function srcSeter(tag) {
       tag.srcset = tag.dataset.img;
}

function fullQuality(item) {
       const priority = item.dataset.priority || 0;
       setTimeout(function () {
              const webp = item.querySelector('.webp-img');
              const webp480 = item.querySelector('.webp-img-480');
              const noWebp = item.querySelector('.nowebp-img');
              const noWebp480 = item.querySelector('.nowebp-img-480');
              srcSeter(webp480);
              srcSeter(noWebp);
              srcSeter(noWebp480);
              srcSeter(webp);
              // const fullWebp = webp.dataset.img;
              // const fullNoWebp = noWebp.dataset.img;  
              //   webp.srcset=fullWebp; 
              //   noWebp.src=fullNoWebp;
       }, 1 + baseDelay * priority);
}

function toggleMinImg() {
       const pictures = document.querySelectorAll('.toggle-img--js');
       for (let i = 0; i < pictures.length; i++) {
              const pic = pictures[i];
              fullQuality(pic);
       }
}

toggleMinImg();