$(document).ready(function () {
  // Function prepends each tweet to .user-tweet from an array of tweets
  const renderTweets = tweets => {
    // empty element inside of '.user-tweet'
    $('.user-tweet').empty();
    // then prepend new element inside of '.user-tweet'
    tweets.forEach((user) => $('.user-tweet').prepend(createTweetElement(user)));
  };

  // Function creates HTML element that will be appended
  const createTweetElement = tweet => {
    let $tweet =
      `<article class="tweet">
    <header class="tweet-header">
      <div>
        <img src=${tweet.user.avatars} width="60" height="60">
        <span class="name">${tweet.user.name}</span>
      </div>
      <span class="user-link">${tweet.user.handle}</span>
    </header>
    <main class="tweet-main">
      <p>${tweet.content.text}</p>
    </main>
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
  $(".new-tweet > p").hide();
  // AJAX POST request, data will be serialized
  $("form").submit(event => {
    $("textarea").val();
    event.preventDefault();
    // if statement will validate charicter length and show an appropriate error message
    if ($(".counter").val() > 139) {
      $(".new-tweet > p").hide();
      $(".empty-char").slideDown("slow");
    } else if ($(".counter").val() < 0) {
      $(".new-tweet > p").hide();
      $(".maximum-char").slideDown("slow");
    } else {
      $(".new-tweet > p").slideUp("slow");
      const formData = $("form").serialize();
      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: formData,
        success: () => {
          // prepend/upload tweet to HTML/web page
          loadtweets();
        }
      });
      // after tweet, reset textarea and char-counter
      $("textarea").val('');
      $("output").val(140);
    }
  });

  // AJAX GET request from "/tweets" and receives array of tweets as JSON
  const loadtweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json"
    })
      .then((data) => {
        // append data to HTML
        renderTweets(data);
      });
  };
  loadtweets();

  // a button to hide and show text area (Write a new tweet)
  $("nav div").click(() => {
    $(".new-tweet").slideToggle();
  });
  // a button to scroll up to the top (TWEETER)
  $("nav > button").off("click").on("click", () => {
    const offset = $("html").offset();
    $("html").animate({ scrollTop: offset.top }, 400);
  });
});