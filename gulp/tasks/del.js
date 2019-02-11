module.exports = function () {
  const del = {
    build: $.path.build
  }
  $.gulp.task("del", function () {
    return $.del([del.build]);
  });
}
