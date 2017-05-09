// gulpfile.js

// Require Gulp
var gulp = require('gulp');

// Require Babel
var babel = require('gulp-babel');

// Require Sass
var sass = require('gulp-sass');

// Default task
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});

// Styles task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/styles/'));
});