$(document).ready(function () {
  // Banner start
  $(".hl-banner__slider").slick({
    arrows: true,
    prevArrow: $(".hl-banner__prev"),
    nextArrow: $(".hl-banner__next"),
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    infinite: true,
    slide: ".hl-banner__item",
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  // Banner end

  // Our Capabilities slider start
  $(".hl-Capabilities__slider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  // $('.hl-Capabilities__slider').on('init', function(event, slick, direction) {

  //     // check to see if there are one or less slides
  //     if (!($('.slick-dots li.slick-active').length > 1)) {

  //         // remove arrows
  //         $('.slick-active').hide();

  //     }

  // });
  // $('.hl-Capabilities__slider').slick({
  //     infinite: false,
  //     arrows: false,
  //     dots: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  // });

  // Our Capabilities slider end

  // $(".hl-header__menu-sub").click(function() {
  //     $(this).parents().closest(".hl-header__menu-inner").find(".hl-header__level2").addClass("active");
  // });
  // $(".hl-header__back-btn, .navbar-toggler").click(function() {
  //     $(".hl-header__level2").removeClass("active");
  // });
  $(".navbar-toggler").click(function () {
    $(".hl-header").toggleClass("hl-header--bg");
    $(".hl-header .nav-item").removeClass("active");
    $(".hl-header__sub-menu").removeClass("active");
  });
  $(".navbar-collapse .nav-item:not(:last-child)").mouseover(function () {
    $(".hl-header").addClass("hl-header--bg");
  });
  $(".navbar-collapse .nav-item:not(:last-child)").mouseout(function () {
    $(".hl-header").removeClass("hl-header--bg");
  });
  $(window).on("scroll", function () {
    /**Fixed header**/
    if ($(window).scrollTop() > 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  if (window.matchMedia("screen and (max-width: 1023px)").matches) {
    $(document).on("click", ".hl-header .nav-link", function () {
      if (!$(this).parent().hasClass("active")) {
        $(".hl-header .nav-item").removeClass("active");
      }
      $(this).parent().toggleClass("active");
    });
  }
  $(".hl-header__menu-item-head").click(function () {
    $(this)
      .parents()
      .closest(".hl-header__menu-item")
      .find(".hl-header__sub-menu")
      .addClass("active");
  });
  $(".hl-header__back-btn").click(function () {
    $(".hl-header__sub-menu").removeClass("active");
  });
  $(".hilleman-sidebar__person").click(function () {
    $(".hilleman-sidebar__person-dropdown").toggleClass("active");
    $(".hilleman-sidebar__person").toggleClass("active");
  });
});

// calendar Start
$("#kt_daterangepicker_1").daterangepicker();
// calendar end

// Filter Button start
const filterbtn = document.querySelector(".hl-filter__icon");
const filterdropdown = document.querySelector(".hl-filter__dropdown");
const FilterClick = () => {
  filterbtn?.addEventListener("click", () => {
    filterdropdown.classList.toggle("show");
  });
};
FilterClick();
// Filter Button end

$('.hl-internship__testimonials').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true
});

// copytext
let copyText = document.querySelector(".hl-modal__copytext");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500);
});