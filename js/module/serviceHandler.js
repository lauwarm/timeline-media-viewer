var serviceTwitter = require('../service/service-twitter');
var serviceTumblr = require('../service/service-tumblr');

var serviceHandler = function(serviceName, callback) {
  serviceName(callback);
}

module.exports = {
  serviceHandler: serviceHandler
}
