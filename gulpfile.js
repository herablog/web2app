var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
			port: 8000
    }));
});
