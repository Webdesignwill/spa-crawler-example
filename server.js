
var express = require('express'),
      debug = require('debug')('webdesignwill');

var env = process.env.NODE_ENV || 'development',
      config = require('./config/config')[env],
      mongoose = require('mongoose'),
      http = require('http');

// Database
var db = mongoose.connect(config.db);

// App
var app = express(),
      server = http.createServer(app);

// access control settings
require('./config/express')(app, config);
require('./config/routes')(app);

// Start
var port = process.env.PORT || 5000;
server.listen(port, function () {
  debug('Express server listening on port ' + server.address().port);
});

// expose app
exports = module.exports = app;