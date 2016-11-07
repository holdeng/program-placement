var cachebust = require('gulp-cache-bust');
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require("gulp-uglify");

gulp.task('default', function () {
    return gulp.src('./src/main/webapp/index.html')
        .pipe(usemin({
            js: [uglify],
            jsAttributes: {
                id: ['libJs', 'appJs']
            }
        }))
        .pipe(cachebust({
                type: 'timestamp'
            }))
        .pipe(gulp.dest('./target/program-placement'));
});
