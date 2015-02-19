
var Controllers = require('./../app/controllers');

module.exports = function (app) {
  app.get('/filter', Controllers.Course.filter);
};