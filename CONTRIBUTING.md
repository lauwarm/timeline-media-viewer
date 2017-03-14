# work in progress
will be updated soon

# add new services
+ inside the /js/service folder are the services located
+ create a new service-<>.js file
+ inside 'var service<> = function(callback) {}' should your magic happen to get all the links
+ push those links to an array
+ when you have all your links in the array and you're done with everything else, do
'callback(null, arrUrl);'
+ add a 'module.exports = { service<>: service<> }'
+ now you add your service to '/js/module' 'var service<> = require('../service/service-<>');'
+ the last step requires you to add 'serviceHandler.serviceHandler(service<>.service<>,setView);' to '/js/view.js', you can also comment out the other serviceHandler to test your own implementation only

# add functions to the app itself
