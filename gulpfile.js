const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function () {
     browserSync.init({
          server: {
               baseDir: "src"
          }
     });
});

gulp.task('style', function() {
     return gulp.src("src/sass/*.scss")
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(autoprefixer())
          .pipe(gulp.dest("src/css"))
          .pipe(browserSync.stream());
});

gulp.task('watch', function() {
     gulp.watch("src/sass/*.scss", gulp.parallel("style"));
     gulp.watch("src/*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch', 'server', 'style'));

