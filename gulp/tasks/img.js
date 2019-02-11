module.exports = function () {

  const img = {
    src: $.path.src + 'assets/img/**/*.*',
    build: $.path.build + 'assets/img'
  }

  $.gulp.task('img', function () {
    return $.gulp.src(img.src)
      .pipe($.gp.imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{
          removeViewBox: true
        }]

      }))
      .pipe($.gulp.dest(img.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}