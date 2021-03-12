var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync').create()
sass.compiler = require('node-sass')

function copyHtml() {
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream())
}

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
}

function liveBrowser() {
  browserSync.init({
    server: {
      baseDir: './public/',
    },
    port: 3000,
  })
}

function watcher() {
  gulp.watch('./src/**/*.html', gulp.series(copyHtml))
  gulp.watch('./src/scss/**/*.scss', gulp.series(compileSass))
}

exports.default = gulp.series(
  copyHtml,
  compileSass,
  gulp.parallel(liveBrowser, watcher)
)

// exports.default = copyHtml
// exports.copy = copyHtml
// exports.compileSass = compileSass
