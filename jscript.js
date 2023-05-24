
/*--------swiper-------*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*--------DarkMode light-------*/
  
  /*-------scroll----*/
  ScrollReveal({
    rest:true,
    distance:'80px',
    duration:2000,
    delay:200

  });

  ScrollReveal().reveal('.home-content, .header',{origin:'top'});
  ScrollReveal().reveal('.home-img img, .services-comtainer, .portfolio-box, .testimonial-wrapper, .contact form',{origin:'bottom'});
