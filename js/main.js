"use strict";

$(function() {

  // sneakbar click -> scroll to about me
  $("div.sneakbar").click(function() {
    $("#about").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", offset: -15});
  });

  // backtotop click -> scroll to about me
  $("div.backtotop").click(function() {
    $("html, body").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", mobileHA: false});
  });

  // scroll back to top
  $("a[href='#']").click(function() {
    $("html, body").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", mobileHA: false});
  });

  // scroll listener
  $(window).scroll(function() {
    window.requestAnimationFrame(scrollHandler);
  });

});

// scroll handler
function scrollHandler() {

  var windowPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docHeight = $(document).height();

  // hide footer
  if (windowPos > $("#about").scrollTop() + 60) {
    $("footer").addClass("hide");
  } else {
    $("footer").removeClass("hide");
  }

}