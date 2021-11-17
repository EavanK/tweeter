$(document).ready(function() {
  
  $("#tweet-text").on('input', function(event) {

    const count = $(this).parent().find("output");
    // const count = $(this).closest("form").find(".counter");
    
    const letterCount = $(this).val().length;

    $(count).text(140 - letterCount);

    if ( letterCount > 140 ) {
      $(count).addClass("red");
    } else {
      $(count).removeClass("red");
    }
  });
});