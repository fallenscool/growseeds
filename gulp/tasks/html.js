module.exports = function () {

  const html = {
    src: $.path.src,
    build: $.path.build
  }
  $.gulp.task('html', function () {
    return $.gulp.src(html.src + '*.html')
      .pipe($.gp.plumber())
      .pipe($.gp.debug())
      .pipe($.gp.rigger())
      .pipe($.gulp.dest(html.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}