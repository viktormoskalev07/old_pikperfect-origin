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
    } else {
      header.classList.remove("header-shadow"); 
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
        // scrollWidth = window.innerWidth - html.offsetWidth + "px";
        // body.style.paddingRight = scrollWidth;
      } else {
        // body.style.paddingRight = 0;
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
 

// promobar



 
function promobar (){
  const xhr = new XMLHttpRequest();
  const promoText = document.querySelector('#promo-place-text');
  const promoCode = document.querySelector('#promo-place-code');
   
  xhr.open('GET', 'https://www.pikperfect.com/get-discount' );  
  xhr.responseType='json';
  xhr.addEventListener('load', function(){
    if (xhr.status < 400) { 
     console.log(xhr.response.code); 
     console.log(xhr.response.text); 
     promoCode.innerHTML='Code:'+xhr.response.code;
     promoText.innerHTML=' '+xhr.response.text;
     promoText.classList.remove('promobar-hide');
     setTimeout(() => {
         promoCode.classList.remove('promobar-hide');
     }, 600); 
  } 
  })
  
      
    xhr.send();
  
   
}
 
  // promobar(); 
// promobar
 


// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("modalLogin");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



@@include('modules/imgpreloader.js')
@@include('modules/accordion.js') 
@@include('modules/popup-mobile.js')
