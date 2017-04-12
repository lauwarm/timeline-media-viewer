var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
  files: ['./**'],
  platforms: ['linux64', 'win64', 'osx64'],
  flavor: 'normal'
});

nw.build().then(function () {
  console.log('all done!');
}).catch(function (error) {
  console.error(error);
});
