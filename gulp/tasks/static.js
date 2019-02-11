module.exports = function () {

  const static = {
    src: $.path.src + 'assets/static/**/*.*',
    build: $.path.build + 'assets/static'
  }

  $.gulp.task('static', function () {
    return $.gulp.src(static.src)
      .pipe($.gulp.dest(static.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}