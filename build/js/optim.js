function addScript(e,t){const d=document.querySelector("#script-place"),r=document.createElement("script");return r.async=!0,r.src=e,setTimeout(()=>{d.appendChild(r)},t),r}window.addEventListener("load",(function(){const e=window.matchMedia("(max-width: 480px)").matches;let t=1;const d=document.querySelector(".swiper-delay");if(d){const r=parseInt(d.dataset.time);r>100&&(t=1+r/5,e&&(t=r))}addScript("js/swiper.min.js",t).addEventListener("load",()=>{addScript("js/slider.js",0)}),addScript("//code.jquery.com/jquery-1.11.2.min.js",1e3).addEventListener("load",()=>{addScript("js/jqueryWorksHere.js",0)});let r=100;e&&(r=2e3),setTimeout(()=>{if(document.querySelector(".lazy-video")){const e=document.querySelector(".lazy-video__preloader"),t=document.querySelector(".lazy-video__activator-js");t.src=t.dataset.src,setTimeout(()=>{e.style.opacity=0},300)}},r)}));