module.exports = function () {

  const js = {
    src: $.path.src + 'js/app.js',
    build: $.path.build
  }

  $.gulp.task('js', function () {
    return $.gulp.src(js.src)
      .pipe($.gp.plumber())
      .pipe($.gp.rigger())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.uglify({
        toplevel: true
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest(js.build))
      .pipe($.bs.reload({
        stream: true
      }));
  })
}
