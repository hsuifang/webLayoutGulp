//  ------
/* 第一種寫法
  const gulp = require('gulp')
  gulp.task('html', function () {
    return return src('./src/**/ /*.html').pipe(dest('./public/'))
  })

  然後在command line 上面執行 gulp task
*/

//================================
/* 第二種寫法
const { src, dest } = require('gulp')

function copyHtml() {
  return src('./src/**/ /*.html').pipe(dest('./public/'))
}

** Public tasks are exported from your gulpfile, which allows them to be run by the gulp command.

exports.default = streamTask // gulp default streamTask
*/

// =================================================================

// var gulp = require('gulp')
// function copyHtml(cb) {
//   gulp.src('./src/**/*.html').pipe(gulp.dest('./public'))
//   console.log(cb)
//   cb()
// }

// exports.default = copyHtml
// exports.copy = copyHtml
