 /**
  * header sticky & back to top
  */
 
 const header = document.querySelector("[data-header]");
 const backTopBtn = document.querySelector("[data-back-top-btn]");
 
 window.addEventListener("scroll", function () {
   if (window.scrollY >= 100) {
     header.classList.add("active");
     backTopBtn.classList.add("active");
   } else {
     header.classList.remove("active");
     backTopBtn.classList.remove("active");
   }
 });

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// home slide

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// review slide

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    },
  });

/**
 * move cycle on scroll
 */

 window.addEventListener("scroll", function () {
  let activeScrollPos = window.scrollY;

  if (lastScrollPos < activeScrollPos) {
  lastScrollPos = activeScrollPos;
  
  }

});
  
// loader screen

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;