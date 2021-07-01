// toggle min-img 
function fullQuality(item){ 
    const priority  = item.dataset.priority||0;
    setTimeout(function() {
    const webp = item.querySelector('.webp-img');
    const noWebp = item.querySelector('.nowebp-img');
    const fullWebp = webp.dataset.img;
    const fullNoWebp = noWebp.dataset.img;  
      webp.srcset=fullWebp; 
      noWebp.src=fullNoWebp;
    }, 1+300*priority);
  }
  function toggleMinImg(){ 
      const pictures = document.querySelectorAll('.toggle-img--js');  
      for (let i = 0; i < pictures.length; i++) {
        const pic = pictures[i]; 
        fullQuality(pic );  
      } 
  } 
toggleMinImg();