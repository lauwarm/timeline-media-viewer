var gui = window.require('nw.gui');
var server = require('../../authentication/app.js');

var settings = function() {
  gui.Window.open('http://localhost:3000/', {}, function(myWin) {
  });
};

var settingsTwitter = function() { //obsolete
  gui.Window.open("../views/auth-twitter.html", {}, function(myWin) {
  });
};

var settingsTumblr = function() { //obsolete
  gui.Window.open("../views/auth-tumblr.html", {}, function(myWin) {
  });
};

module.exports = {
  sSettings: settings,
  sTwitter: settingsTwitter, //obsolete
  sTumblr: settingsTumblr //obsolete
}
