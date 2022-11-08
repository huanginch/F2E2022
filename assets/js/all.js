"use strict";

AOS.init(); //AOS
// swiper

var mySwiper = new Swiper('.timeSwiper', {
  slidesPerView: "1",
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 4
    }
  }
}); // banner newspaper animation using gsap

var srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#banner",
    pin: true,
    // markers: true,
    scrub: true
  }
}); // global animation

srollTL.to(".scroll", {
  opacity: 0
});
srollTL.to("#newspaper_up", {
  yPercent: "-100"
});
srollTL.to(".header", {
  opacity: 1
});
srollTL.to("#newspaper_right", {
  yPercent: "100"
}, "<");
srollTL.to("#newspaper_right_mobile", {
  yPercent: "150"
}, "<");
srollTL.to("#newspaper_left", {
  yPercent: "100"
});
srollTL.to("#newspaper_left_mobile", {
  yPercent: "150"
}, "<");
var viewport_width = window.innerWidth;
console.log(viewport_width); // RWD setting

if (viewport_width < 480) {
  srollTL.to("#V1", {
    yPercent: "-80"
  });
} else if (viewport_width < 768) {
  // sm
  srollTL.to("#V1", {
    yPercent: "-30"
  });
} else if (viewport_width < 1024) {
  // md
  srollTL.to("#V1", {
    yPercent: "-23"
  });
} else {
  // lg
  srollTL.to("#V1", {
    yPercent: "-35"
  });
}

srollTL.to("#wanted", {
  opacity: 1
}); // lottie animation
//json magic stick animation 

var magicSticks = document.querySelectorAll('.magicStick'); // console.log(magicSticks[1]);

var magicStickAnimation = Array(magicSticks.length);
magicSticks.forEach(function (item, index) {
  magicStickAnimation[index] = bodymovin.loadAnimation({
    container: item,
    path: './assets/json/MagicStick_loading.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Magic Stick Animation" + index
  });
}); //json mouse scroll down animation

var mouses = document.querySelectorAll('.mouse');
var mouseAnimation = Array(mouses.length);
mouses.forEach(function (item, index) {
  mouseAnimation[index] = bodymovin.loadAnimation({
    container: item,
    path: './assets/json/scroll_down.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Mouse Animation" + index
  });
}); // white scroll down animation

var scrollDownWhiteAnimation = bodymovin.loadAnimation({
  container: document.querySelector('#scroll_down_white'),
  path: './assets/json/scroll_down_white.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Mouse Scroll White Animation"
}); //swipe animation

var swipeAnimation = bodymovin.loadAnimation({
  container: document.querySelector('#swipe-animation'),
  path: './assets/json/swipe_up.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Swipe Down Animation"
}); // page load animation

$(window).on('load', function () {
  $('#loading').delay(2500).fadeOut('slow');
  $('html').css('overflow', 'auto');
  $('body').css('overflow', 'auto');
}); //jquery animation

$(document).ready(function () {
  $("#mobile-nav-links .close").click(function (e) {
    // close mobile menu after click the close button
    e.preventDefault();
    $("#mobile-nav-links").addClass("tranform");
    $("#mobile-nav-links").addClass("-translate-x-full");
  });
  $("#nav .menu").click(function (e) {
    // open mobile menu after click the menu button
    e.preventDefault();
    $("#mobile-nav-links").removeClass("tranform");
    $("#mobile-nav-links").removeClass("-translate-x-full");
    $("#mobile-nav-links").addClass("translate-x-0");
  });
  $("#mobile-nav-links a").click(function () {
    // close mobile menu after click the menu link button
    $("#mobile-nav-links").addClass("tranform");
    $("#mobile-nav-links").addClass("-translate-x-full");
  }); // sstream section click animation

  $("#streamBtn").click(function (e) {
    e.preventDefault();
    $("#streamTitle").addClass("invisible");
    $("#streamTitle").addClass("ease-in");
    $("#stream").removeClass("invisible");
    $("#stream").removeClass("opacity-0");
    $("#stream").addClass("opacity-100");
  });
});
//# sourceMappingURL=all.js.map
