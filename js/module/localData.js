// work in progress
var config = require('../../config/_config.js');

var initializeLocalStorage = function() {
  var tmp = 'tmp';

  try {
    localStorage.setItem(tmp, tmp);
    localStorage.removeItem(tmp);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  }
};

var setLocalStorageTwitter = function() {
  localStorage.setItem('username-twitter', config.oauthSettings.twitter.username);
  localStorage.setItem('oauth-consumer-key-twitter', config.oauthSettings.twitter.consumerKey);
  localStorage.setItem('oauth-consumer-secret-twitter', config.oauthSettings.twitter.consumerSecret);
  localStorage.setItem('oauth-access-token-twitter', config.oauthSettings.twitter.access_token);
  localStorage.setItem('oauth-access-token-secret-twitter', config.oauthSettings.twitter.access_token_secret);
};

var checkLocalStorageTwitter = function() {
  var checkTwitter = false;

  if(localStorage.getItem('username-twitter') !== null &&
    localStorage.getItem('oauth-consumer-key-twitter') !== null &&
    localStorage.getItem('oauth-consumer-secret-twitter') !== null &&
    localStorage.getItem('oauth-access-token-twitter') !== null &&
    localStorage.getItem('oauth-access-token-secret-twitter') !== null) {
      checkTwitter = true;
  }

  return checkTwitter;
};

var setLocalStorageTumblr = function() {
  localStorage.setItem('oauth-consumer-key-tumblr', config.oauthSettings.tumblr.consumerKey);
  localStorage.setItem('oauth-consumer-secret-tumblr', config.oauthSettings.tumblr.consumerSecret);
  localStorage.setItem('oauth-access-token-tumblr', config.oauthSettings.tumblr.access_token);
  localStorage.setItem('oauth-access-token-secret-tumblr', config.oauthSettings.tumblr.access_token_secret);
};

var checkLocalStorageTumblr = function() {
  var checkTumblr = false;

  if(localStorage.getItem('oauth-consumer-key-tumblr') !== null &&
    localStorage.getItem('oauth-consumer-secret-tumblr') !== null &&
    localStorage.getItem('oauth-access-token-tumblr') !== null &&
    localStorage.getItem('oauth-access-token-secret-tumblr') !== null) {
      checkTumblr = true;
  }

  return checkTumblr;
};

var setLocalStorageInstagram = function() {
  localStorage.setItem('oauth-consumer-key-instagram', config.oauthSettings.instagram.consumerKey);
  localStorage.setItem('oauth-consumer-secret-instagram', config.oauthSettings.instagram.consumerSecret);
  localStorage.setItem('oauth-access-token-instagram', config.oauthSettings.instagram.access_token);
  localStorage.setItem('oauth-access-token-secret-instagram', config.oauthSettings.instagram.access_token_secret);
};

var checkLocalStorageInstagram = function() {
  var checkInstagram = false;

  if(localStorage.getItem('oauth-consumer-key-instagram') !== null &&
    localStorage.getItem('oauth-consumer-secret-instagram') !== null &&
    localStorage.getItem('oauth-access-token-instagram') !== null &&
    localStorage.getItem('oauth-access-token-secret-instagram') !== null) {
      checkInstagram = true;
  }

  return checkInstagram;
};

module.exports = {
  iLS: initializeLocalStorage,
	sLSTwitter: setLocalStorageTwitter,
  cLSTwitter: checkLocalStorageTwitter,
	sLSTumblr: setLocalStorageTumblr,
  cLSTumblr: checkLocalStorageTumblr,
	sLSInstagram: setLocalStorageInstagram,
  cLSInstagram: checkLocalStorageInstagram
};
