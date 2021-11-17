$(document).ready(function () {

  const createTweetElement = (tweet) => {
    return `<article class="tweet">
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
      <span>${tweet.created_at} days ago</span>
      <div class="icon">
        <i class="fa fa-flag"></i>
        <i class="fa fa-retweet"></i>
        <i class="fa fa-heart"></i>
      </div>
    </footer>
  </article>`;
  };

  // Test / driver code (temporary)
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };
  const $tweet = createTweetElement(tweetData);
  $('.user-tweet').append($tweet);
});
