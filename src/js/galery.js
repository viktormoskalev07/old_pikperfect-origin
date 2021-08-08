(function(){
   const container = document.querySelector('.gallery__container');
   let activator  ;
   let close      ;
   let slidePlace ;
   let fullscreen ;
   let closeGalery;
   if(container){
          activator = document.querySelectorAll('.gallery__activator-js');
          activator.forEach(i => {
            i.classList.add('cursor-pointer');
          });
           
         close = document.querySelector('.gallery__close');
         slidePlace =container.querySelector('.swiper-wrapper');
         fullscreen = container.querySelector('.gallery__fullscreen-btn')  
          closeGalery=()=>{
            container.classList.add('gallery__fade');
            setTimeout(() => {
                container.classList.add('gallery__d-none');
            }, 400);   
            GallerySlider.destroy(true, true);
            slidePlace.innerHTML=''; 
            document.body.style.overflow='auto';
        } 
   }
 
   let slides;
   let GallerySlider 
  
 const openGalery =function(){  

    const folder = this.dataset.folder;
    const images = this.dataset.galleryimages;
     if(images){ 
            const arrimages = images.split(',');  
            slides='';
            arrimages.forEach(imgName => { 
              imgName = imgName.replace(/\s/g, ''); 
              imgNameWebp = imgName.replace(/(\.png|\.jpg)/gm, ''); 
                slides+=`
                <div class="swiper-slide gallery__item">
                <figure class="gallery__image"> 
                <img   class="swiper-lazy"
                data-src="${folder+imgName}"  
                data-srcset="${folder}${imgNameWebp}-2880.webp 2x ,    ${folder}${imgNameWebp}-1440.webp" 
                /> 
                </figure> 
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white "></div>
                    </div>  
                `; 
        });
        slidePlace.innerHTML=slides; 
        setTimeout(() => {
              GallerySlider   = new Swiper(".swiperGallery", { 
                effect: "fade",
                loop:true,
                grabCursor:true,
                resizeObserver:true,
                lazy: {
                    loadPrevNext: true,
                  },
                navigation: {
                  nextEl: ".gallery__next",
                  prevEl: ".gallery__prev",
                }, 
              });
        }, 100);
  
     }

     document.body.style.overflow='hidden';
     container.classList.remove('gallery__d-none');
     setTimeout(() => { 
        container.classList.remove('gallery__fade');
     }, 1);
 }
    if(container&&activator){ 
      
        close.addEventListener('click' ,closeGalery); 
        document.addEventListener('keydown' , function(event){
            console.log(event.keyCode==27);
            if(event.keyCode==27){
                closeGalery();
            } 
        }) 
        activator.forEach(item => {
            item.addEventListener('click' , openGalery);
        });
        fullscreen.addEventListener('click', function(){ 
            if(container.classList.contains('gallery__fullscreen-open')){
                  
                    setTimeout(() => { 
                        GallerySlider.update(); 
                        GallerySlider.updateSize();
                    },500);
            }
                            container.classList.toggle('gallery__fullscreen-open');
                            
                            setTimeout(() => { 
                                GallerySlider.update(); 
                                GallerySlider.updateSize()
                            }, 1);
                            
        })
    } 
}())




 

 