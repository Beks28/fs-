var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });



  var swiper = new Swiper(".myySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
















  document.addEventListener("DOMContentLoaded", function() {
    setInterval(openModal, 120000);
  });

  function openModal() {
    document.getElementById("spamModal").style.display = "block";
    setTimeout(showCloseButton, 5000);
  }