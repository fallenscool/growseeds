module.exports = function () {
  $.gulp.task(
    'build',
    $.gulp.parallel(
      'html',
      'js',
      'scss',
      'img',
      'sprite',
      'font',
      'static'
    )
  );
}