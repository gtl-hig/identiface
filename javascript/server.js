/* global require */
var serverFactory = require('spa-server');
var matcher = new RegExp('^[^.]+$');

var server = serverFactory.create({
  'path': './build',
  'port': 3100,
  'fallback': function (request) {
    // For all missing urls without extension
    if (matcher.test(request.url)) {
      // Falling back to main application file.
      return '/index.html';
    }
    // Falling back to default server 404 page.
    return null;
  }
});

server.start();
