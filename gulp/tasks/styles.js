var gulp  = require('gulp'),
postcss = require('gulp-postcss'),
fs = require('fs'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
csscolor = require('postcss-color-function'),

mixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/**/styles.css')
		.pipe(postcss([cssimport, mixins, cssvars, csscolor, nested, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});