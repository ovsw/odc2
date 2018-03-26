var gulp  = require('gulp'),
postcss = require('gulp-postcss'),
fs = require('fs'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
csscolor = require('postcss-color-function'),
hexrgba = require('postcss-hexrgba'),
mixins = require('postcss-mixins'),
sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function(){
  return gulp.src('./src/styles/**/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([cssimport, cssvars, mixins, csscolor, nested, hexrgba, autoprefixer])) // cssvars was after mixins
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./styles'));
});