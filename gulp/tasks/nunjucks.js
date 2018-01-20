var gulp  = require('gulp'),
nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function(){
	return gulp.src('./app/pages/**/*.html')
		.pipe(nunjucksRender({
			path: ['./app/templates/']
		}))
		.on('error', function(err) {
	     console.log(err.toString());
	    })
		.pipe(gulp.dest('./app/'));
});