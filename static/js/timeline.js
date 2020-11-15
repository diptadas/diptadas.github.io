// $(function () {
//   window.sr = ScrollReveal();

//   if ($(window).width() < 768) {
//     if ($(".timeline-content").hasClass("js--fadeInLeft")) {
//       $(".timeline-content")
//         .removeClass("js--fadeInLeft")
//         .addClass("js--fadeInRight");
//     }

//     sr.reveal(".js--fadeInRight", {
//       origin: "right",
//       // distance: "300px",
//       easing: "ease-in-out",
//       duration: 800
//     });
//   } else {
//     sr.reveal(".js--fadeInLeft", {
//       origin: "left",
//       distance: "300px",
//       easing: "ease-in-out",
//       duration: 800
//     });

//     sr.reveal(".js--fadeInRight", {
//       origin: "right",
//       distance: "300px",
//       easing: "ease-in-out",
//       duration: 800
//     });
//   }
// });

$(function () {
  window.sr = ScrollReveal();
  if ($(window).width() < 768) {
    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '0px',
      easing: 'ease-in-out',
      duration: 800,
      opacity: 1,
      scale: 0.8,
    });
  } else {
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '0px',
      easing: 'ease-in-out',
      duration: 800,
      opacity: 1,
      scale: 0.8,
    });
    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '0px',
      easing: 'ease-in-out',
      duration: 800,
      opacity: 1,
      scale: 0.8,
    });
  }
  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '0px',
    easing: 'ease-in-out',
    duration: 800,
    opacity: 1,
    scale: 0.8,
  });
  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '0px',
    easing: 'ease-in-out',
    duration: 800,
    opacity: 1,
    scale: 0.8,
  });
});
