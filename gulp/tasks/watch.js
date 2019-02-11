module.exports = function () {

  const watch = {
    html: $.path.src + '*.html',
    scss: $.path.src + 'styles/**/*.scss',
    js: $.path.src + 'js/**/*.js',
    img: $.path.src + 'assets/img/**/*.*',
    sprite: $.path.src + 'assets/svg/**/*.*',
    font: $.path.src + 'assets/fonts/**/*.*',
    static: $.path.src + 'assets/static/**/*.*',
  }

  $.gulp.task("watch", () => {
    $.gulp.watch([watch.html], $.gulp.parallel("html"));
    $.gulp.watch([watch.scss], $.gulp.parallel("scss"));
    $.gulp.watch([watch.js], $.gulp.parallel("js"));
    $.gulp.watch([watch.img], $.gulp.parallel("img"));
    $.gulp.watch([watch.sprite], $.gulp.parallel("sprite"));
    $.gulp.watch([watch.font], $.gulp.parallel("font"));
    $.gulp.watch([watch.static], $.gulp.parallel("static"));
  });
}