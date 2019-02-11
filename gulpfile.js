'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  bs: require('browser-sync').create(),
  path: {
    tasks: require('./gulp/config/tasks.js'),
    src: './src/',
    build: './build/'
  }
};

$.path.tasks.forEach(function (tasksPath) {
  require(tasksPath)();
});


$.gulp.task("default", $.gulp.series("build", $.gulp.parallel("server", "watch")));