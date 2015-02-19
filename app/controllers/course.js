
var Course = require('../models/course'),
      phantom = require('phantom');

module.exports.filter = function (req, res, next) {
  if(req.query._escaped_fragment_) {
    var param = req.query._escaped_fragment_.split('=')[1];
    Course.filter(param, function (err, courses) {
      if(err) next(err);

      phantom.create(function (ph) {
        return ph.createPage(function (page) {
          return page.open('http://localhost:5000/#!' + req.query._escaped_fragment_, function (status) {
            return page.evaluate((function () {
              return document.getElementsByTagName('html')[0].innerHTML;
            }), function (result) {
              res.send(result);
              ph.exit();
            });
          });
        });
      });
    });
  } else {
    Course.filter(req.query.filter, function (err, courses) {
      if(err) next(err);
      res.json(courses);
    });
  }
};