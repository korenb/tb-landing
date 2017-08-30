var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('css:build', function() {
    gulp.src('./src/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task("watch", function () {
    return gulp.watch('./src/styles/*.scss', ["css:build"]);
});