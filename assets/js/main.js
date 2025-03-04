(function ($) {
  "use strict";

  // data bg img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
  $(".test-popup-link").magnificPopup({
    type: "image",
    // other options
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
   // other options
  });

  // tastimonial slider js
  var swiper = new Swiper(".mt-testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,

    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mt-swiper-test-button-next",
      prevEl: ".mt-swiper-test-button-prev",
    },
  });

  //brand top slider js
  var swiper = new Swiper(".mt-brand-top-active", {
    slidesPerView: "auto",
    freemode: true,
    centeredSlides: true,
    spaceBetween: 80,

    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  // brand bottom slider js
  var swiper = new Swiper(".mt-brand-bottom-active", {
    slidesPerView: "auto", // Automatically adjusts the number of slides based on container width.
    freemode: true, // Allows slides to freely scroll without snapping.
    centeredSlides: true, // Centers the active slide in the middle.
    spaceBetween: 80, // Sets the space between each slide in pixels.
    loop: true, // Enables continuous loop mode.
    speed: 3000, // Sets the speed of slide transition to 3000ms (3 seconds).
    allowTouchMove: false, // Disables touch interactions for swiping slides.
    autoplay: {
      delay: 1, // The time delay for autoplay is 1ms, giving it a continuous scroll effect.
      disableOnInteraction: true, // Disables autoplay when user interacts (e.g., clicks on slide).
    },
  });

  // team slider js
  var swiper = new Swiper(".mt-team-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".mt-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mt-swiper-team-button-next",
      prevEl: ".mt-swiper-team-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
})(jQuery);
