$(document).ready(() => {
  // a button to hide and show text area (Write a new tweet)
  $("nav > div").click(() => {
    $("main #new-tweet").slideToggle();
  });
  
  // a button to scroll up to the top (TWEETER)
  $("nav > button").off("click").on("click", () => {
    $("html").animate({ scrollTop: 0 }, 400);
  });

  //a button to scroll up to the top (arrow)
  $(".top").hide();
  $(window).scroll(() => {
    if ($(window).scrollTop() < 200) {
      $(".top").hide();
    } else {
      $(".top").show().fadeIn();
    }
  });
  $(".top").click(() => {
    $("html").animate({ scrollTop: 0 }, 400);
  });
});