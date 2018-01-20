
// not in use at the moment

var gulp  = require('gulp'),
pug = require('gulp-pug2');

gulp.task('pugTpl', function() {
	return gulp.src('./app/pug/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./app/pug/'));
});