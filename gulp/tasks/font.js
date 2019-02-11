module.exports = function () {

  const font = {
    src: $.path.src + 'assets/fonts/**/*.*',
    build: $.path.build + 'assets/fonts/'
  }

  $.gulp.task('font', function () {
    return $.gulp.src(font.src)
      .pipe($.gulp.dest(font.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}
