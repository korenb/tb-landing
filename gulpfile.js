var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('compile:scss', function() {
    gulp.src('./src/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Content/css'));
});

gulp.task('min:css', ['compile:scss'], function(){
    return gulp.src('./Content/css/styles.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./Content/css'));
});

gulp.task('watch', function () {
    return gulp.watch('./src/styles/*.scss', ['compile:scss']);
});