$(document).ready(function () {
  // Function prepends each tweet to .user-tweet from an array of tweets
  const $renderTweets = tweets => {
    // empty element inside of '.user-tweet'
    $('.user-tweet').empty();
    // then prepend new element inside of '.user-tweet'
    tweets.forEach((user) => $('.user-tweet').prepend($createTweetElement(user)));
  };

  // Function creates HTML element that will be appended
  const $createTweetElement = tweet => {
    let $tweet =
      `<article>
    <header>
      <div>
        <img src=${tweet.user.avatars} width="60" height="60">
        <span>${tweet.user.name}</span>
      </div>
      <span class="user-link">${tweet.user.handle}</span>
    </header>
    <body>
      <p>${tweet.content.text}</p>
    </body>
    <footer>
      <span class="need_to_be_rendered">${timeago.format(`${tweet.created_at}`)}</span>
      <div class="icon">
        <i class="fa fa-flag"></i>
        <i class="fa fa-retweet"></i>
        <i class="fa fa-heart"></i>
      </div>
    </footer>
  </article>`;
    return $tweet;
  };

  // when web page loads, hide error message
  $("section > p").hide();
  // AJAX POST request, data will be serialized
  $("form").submit(event => {
    $("textarea").val();
    event.preventDefault();
    // if statement will validate charicter length and show an appropriate error message
    if ($(".counter").val() > 139) {
      $("section > p").hide();
      $(".empty-char").slideDown("slow");
    } else if ($(".counter").val() < 0) {
      $("section > p").hide();
      $(".maximum-char").slideDown("slow");
    } else {
      $("section > p").slideUp("slow");
      const $formData = $("form").serialize();
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: $formData,
        success: () => {
          // prepend/upload tweet to HTML/web page
          $loadtweets();
        }
      });
      // after tweet, reset textarea and char-counter
      $("textarea").val('');
      $("output").val(140);
    }
  });

  // AJAX GET request from "/tweets" and receives array of tweets as JSON
  const $loadtweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json"
    })
      .then((data) => {
        // append data to HTML
        $renderTweets(data);
      });
  };
  $loadtweets();
});