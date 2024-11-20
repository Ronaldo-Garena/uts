const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Menu Toggle
    document.body.classList.toggle("show-mobile-menu");
});

// Tombol Close Button Ketika Tombol Tutup Ditekan
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Tombol Close Button Ketika Nav Link Ditekan
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

//Syntax JS Swiper dari 'swiperjs'//
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Geser Buletan Legend
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});