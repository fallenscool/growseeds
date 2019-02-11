module.exports = function () {

  const sprite = {
    src: $.path.src + 'assets/svg/**/*.svg',
    build: $.path.src,
    svg: './../build/assets/svg/sprite.svg',
    scss: './styles/settings/_sprites.scss',
    templ: $.path.src + 'styles/settings/template.scss'
  }

  $.gulp.task('sprite', function () {
    return $.gulp.src(sprite.src)
      .pipe(
        $.gp.svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      .pipe(
        $.gp.cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: {
            xmlMode: true
          }
        })
      )
      .pipe($.gp.replace("&gt;", ">"))
      .pipe(
        $.gp.svgSprite({
          shape: {
            spacing: {
              padding: 5
            }
          },
          mode: {
            symbol: {
              dest: ".",
              sprite: sprite.svg,
              render: {
                scss: {
                  dest: sprite.scss,
                  template: sprite.templ
                }
              }
            }
          },
          variables: {
            mapname: "icons"
          }
        })
      )

      .pipe($.gulp.dest(sprite.build))
      .pipe(
        $.bs.reload({
          stream: true
        })
      );
  })
}
