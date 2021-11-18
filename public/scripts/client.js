$(document).ready(function () {
  // Function appends each tweet to .user-tweet from an array of tweets
  const renderTweets = (tweets) => {
    tweets.forEach((user) => $('.user-tweet').append(createTweetElement(user)))
  };

  // Function creates HTML element that will be appended
  const createTweetElement = (tweet) => {
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

  // AJAX POST request, data will be serialized
  $("form").submit(event => {
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      method: $(this).attr("method"),
      data: $(this).serialize(),
      success: result => {
        console.log("The ajax call post was successful", result);
      },
      error: err => {
        console.log("There was an error submitting Ajax call ", err);
      }
    })
  })

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
      })
  }
  loadtweets();
});