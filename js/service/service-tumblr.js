var tumblr = require('tumblr.js');

var tumblrParams = {
  client: null,
  config: null
};

var setServiceTumblrAuth = function() {
  tumblrParams.config = {
    consumer_key: localStorage.getItem('oauth-consumer-key-tumblr'),
    consumer_secret: localStorage.getItem('oauth-consumer-secret-tumblr'),
    token: localStorage.getItem('oauth-access-token-tumblr'),
    token_secret: localStorage.getItem('oauth-access-token-secret-tumblr')
  };
};

var getServiceTumblrAuth = function() {
  return tumblrParams.config;
};

var setServiceTumblrClient = function(authConf) {
  tumblrParams.client = new tumblr.Client(authConf);
};

var getServiceTumblrClient = function() {
  return tumblrParams.client;
};

var myClient = function(callback, client, myOffset) {
  var arrUrl = [];
  client.userDashboard( { type: 'photo', offset: myOffset }, function(error, response) {
    if(error) {
      console.log(error);
      } else {
        for(var i = 0; i < response.posts.length; i++) {
          arrUrl.push(response.posts[i].photos[0].original_size.url);
        }
      }
      callback(null, arrUrl);
    });
};

var serviceTumblr = function(callback) {
  setServiceTumblrAuth();
  setServiceTumblrClient(getServiceTumblrAuth());
  var clientTumblr = getServiceTumblrClient();

  for(var i = 0; i < 10; i++) {
    myClient(callback, clientTumblr, (i*20));
  }
};

module.exports = {
  serviceTumblr: serviceTumblr
}
