var gulp  = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


// watch
gulp.task('watch', function(){

	browserSync.init({

		proxy: "http://odc2.ovs/"
	});

	watch(['./**/*.php','./**/*.inc'], function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

});
// end gulp watch

// browserSync CSS Inject
gulp.task('cssInject', ['styles'], function(){
	gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function(){
	browserSync.reload();
});