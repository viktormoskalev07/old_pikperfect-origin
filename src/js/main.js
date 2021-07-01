const header = document.querySelector(".header");
let scrollPos = 0;
window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    if (scrollPos < window.scrollY && scrollPos >= 50) {
      header.classList.add("header-hide");
      scrollPos = window.scrollY;
    } else {
      header.classList.remove("header-hide");
      scrollPos = window.scrollY;
    }

    if (window.scrollY >= 50) {
      header.classList.add("header-shadow");

      // document.querySelector("body").classList.add("fixed-header");
    } else {
      header.classList.remove("header-shadow");
      // document.querySelector("body").classList.remove("fixed-header");
    }
  });
  body = document.body;
  html = document.querySelector("html");
  openedNav = document.querySelector(".nav-wrap");
  headerNav = document.querySelector(".header-nav");
  let ii = 0;
  document
    .querySelector(".header .menu-btn")
    .addEventListener("click", function (e) {
      header.classList.toggle("menu-open");
      if (header.classList.contains("menu-open")) {
        scrollWidth = window.innerWidth - html.offsetWidth + "px";
        body.style.paddingRight = scrollWidth;
      } else {
        body.style.paddingRight = 0;
      }
      document.querySelector("body").classList.toggle("overflow");

      e.preventDefault();
    });

  const elems = document.querySelectorAll(".header .menu > .has-sub-menu");

  elems.forEach((elem) =>
    elem.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        elems.forEach((elem) => elem.classList.remove("active"));
      } else {
        elems.forEach((elem) => elem.classList.remove("active"));
        this.classList.add("active");
      }
    })
  );
});
 

//promobar


// const xhr = new XMLHttpRequest();
// const promoText = document.querySelector('#promo-place-text');
// const promoCode = document.querySelector('#promo-place-code');
 
// xhr.open('GET', 'https://www.pikperfect.com/get-discount' );  
// xhr.responseType='json';
// xhr.addEventListener('load', function(){
//   if (xhr.status < 400) { 
//    console.log(xhr.response.code); 
//    console.log(xhr.response.text); 
//    promoCode.innerHTML='Code:'+xhr.response.code;
//    promoText.innerHTML=' '+xhr.response.text;
//    promoText.classList.remove('promobar-hide');
//    setTimeout(() => {
//        promoCode.classList.remove('promobar-hide');
//    }, 600); 
// } 
// })


// xhr.send();

//promobar

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
 


/////////// TABS ////////

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

@@include('modules/imgpreloader.js')
@@include('modules/accordion.js')
