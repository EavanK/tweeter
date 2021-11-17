$(document).ready(function () {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = (tweets) => {
    tweets.forEach((user) => $('.user-tweet').append(createTweetElement(user)))
  };

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
  renderTweets(data);
});