AOS.init(); //AOS

// swiper
var mySwiper = new Swiper('.timeSwiper', {
  slidesPerView: "1",
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,  
    }
  }
});

// banner newspaper animation using gsap
const srollTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#banner",
    pin: true,
    // markers: true,
    scrub: true,
  },
});

srollTL.to(".scroll", { opacity: 0 })
srollTL.to("#newspaper_up", { yPercent: "-100" });
srollTL.to(".header", { opacity: 1 })
srollTL.to("#newspaper_right", { yPercent: "100" }, "<");
srollTL.to("#newspaper_right_mobile", { yPercent: "150" }, "<");
srollTL.to("#newspaper_left", { yPercent: "100"});
srollTL.to("#newspaper_left_mobile", { yPercent: "150" }, "<");
srollTL.to("#V1", { yPercent: "-35" });
srollTL.to("#V2", { yPercent: "-23" });
srollTL.to("#V3", { yPercent: "-30" });
srollTL.to("#V4", { yPercent: "-80" });
srollTL.to("#wanted", { opacity: 1})

//json magic stick animation
var magicStickAnimation1 = bodymovin.loadAnimation({

  container: document.querySelector('#magicStick-animation1'),

  path: '/F2E2022/assets/json/MagicStick_loading.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Magic Stick Animation",

});   

var magicStickAnimation2 = bodymovin.loadAnimation({

  container: document.querySelector('#magicStick-animation2'),

  path: '/F2E2022/assets/json/MagicStick_loading.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Magic Stick Animation",

})

//mouse scroll animation
var mouseAnimation1 = bodymovin.loadAnimation({

  container: document.querySelector('#mouse-animation1'),

  path: '/F2E2022/assets/json/scroll_down.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Mouse Scroll Animation",

}); 

var mouseAnimation2 = bodymovin.loadAnimation({

  container: document.querySelector('#mouse-animation2'),

  path: '/F2E2022/assets/json/scroll_down.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Mouse Scroll Animation",

});

var scrollDownWhiteAnimation = bodymovin.loadAnimation({

  container: document.querySelector('#scroll_down_white'),

  path: '/F2E2022/assets/json/scroll_down_white.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Mouse Scroll White Animation",

});

//swipe animation
var swipeAnimation = bodymovin.loadAnimation({

  container: document.querySelector('#swipe-animation'),

  path: '/F2E2022/assets/json/swipe_up.json',

  renderer: 'svg',

  loop: true,

  autoplay: true,

  name: "Swipe Down Animation",

});

// page load animation
$(window).on('load', function () {
  $('#loading').delay(2500).fadeOut('slow');
  $('html').css('overflow', 'auto');
  $('body').css('overflow', 'auto');
});

//jquery animation
$(document).ready(() => {

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
  });
  
  // sstream section click animation
  $("#streamBtn").click(function (e) {
    e.preventDefault();
    $("#streamTitle").addClass("invisible");
    $("#streamTitle").addClass("ease-in");
    $("#stream").removeClass("invisible");
    $("#stream").removeClass("opacity-0");
    $("#stream").addClass("opacity-100");
  })
});