
var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  type : {
    type : String
  },
  url : {
    type : String
  },
  level : {
    type : String
  },
  title : {
    type: String
  },
  content : {
    type : String
  }
});

CourseSchema.statics.filter = function (filter, callback) {
  CourseModel.find({type : filter}, function (err, courses) {
    if(err) callback(err);
    callback(err, courses);
  });
};

mongoose.model('course', CourseSchema);
var CourseModel = mongoose.model('course');
module.exports = CourseModel;

/* FIRST TIME ONLY */

CourseModel.findOne(function (err, courses) {
  if(!courses) CourseModel.create({
    type : "html",
    url : 'html',
    level : "beginner",
    title : "HTML Beginner",
    content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
  },{
    type : "css",
    url : 'css',
    level : "beginner",
    title : "CSS Beginner",
    content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
  },{
    type : "javascript",
    url : 'javascript',
    level : "beginner",
    title : "Javascript Beginner",
    content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
  });
});

// CourseModel.findOne(function (err, courses) {
//   if(!courses) CourseModel.create({
//     type : "html",
//     title : "HTML Courses"
//   },{
//     type : "CSS",
//     title : "CSS Courses"
//   },{
//     type : "Javascript",
//     title : "Javascript Courses"
//   });
// });

// CourseModel.findOne(function (err, courses) {
//   if(!courses) CourseModel.create({
//     type : "html",
//     level : "beginner",
//     title : "HTML Beginner",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "html",
//     level : "intermediate",
//     title : "HTML Intermediate",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "html",
//     level : "advanced",
//     title : "HTML Advanced",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "css",
//     level : "beginner",
//     title : "CSS Beginner",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "css",
//     level : "intermediate",
//     title : "CSS Intermediate",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "css",
//     level : "advanced",
//     title : "CSS Advanced",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "javascript",
//     level : "beginner",
//     title : "Javascript Beginner",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "javascript",
//     level : "intermediate",
//     title : "Javascript Intermediate",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   },{
//     type : "javascript",
//     level : "advanced",
//     title : "Javascript Advanced",
//     content : "Sed quis luctus libero, et dictum est. Mauris ligula orci, sagittis nec neque id, elementum vehicula elit. Ut sed consequat diam. Suspendisse potenti. Phasellus eu placerat massa. Nam blandit mauris a sem dapibus, vel faucibus turpis tincidunt. Quisque pellentesque massa sit amet risus scelerisque, eu rutrum magna porttitor. Ut facilisis ultricies dapibus."
//   });
// });