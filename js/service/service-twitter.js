var twitter = require('twitter');

var twitterEndpoints = {
  timeline: 'https://api.twitter.com/1.1/statuses/home_timeline',
  favourites: 'https://api.twitter.com/1.1/favorites/list'
};

var twitterParams = {
  params: null,
  client: null,
  config: null
};

var setServiceTwitterAuth = function() {
  twitterParams.config = {
    consumer_key: localStorage.getItem('oauth-consumer-key-twitter'),
    consumer_secret: localStorage.getItem('oauth-consumer-secret-twitter'),
    access_token_key: localStorage.getItem('oauth-access-token-twitter'),
    access_token_secret: localStorage.getItem('oauth-access-token-secret-twitter')
  };
};

var getServiceTwitterAuth = function() {
  return twitterParams.config;
};

var setServiceTwitterClient = function(authConf) {
  twitterParams.client = new twitter(authConf);
};

var getServiceTwitterClient = function() {
  return twitterParams.client;
};

var setServiceTwitterParams = function() {
  twitterParams.params = {
    screen_name: localStorage.getItem('username-twitter'),
    count: 200
  };
};

var getServiceTwitterParams = function() {
    return twitterParams.params;
};

var serviceTwitter = function(callback) {
  setServiceTwitterAuth();
  setServiceTwitterClient(getServiceTwitterAuth());
  setServiceTwitterParams();

  var client = getServiceTwitterClient();
  var arrUrl = [];

  client.get(twitterEndpoints.timeline, getServiceTwitterParams(), function(error, tweets, response) {
    if(error) {
      console.log(error);
    } else {
      for(var i = 0; i < tweets.length; i++) {
        if(tweets[i].entities.media == undefined) {
        } else {
          arrUrl.push(tweets[i].entities.media[0].media_url);
        }
      }
    }
    callback(null, arrUrl);
  });
};

module.exports = {
  serviceTwitter: serviceTwitter
}
