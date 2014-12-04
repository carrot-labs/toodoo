/**
 * Require gulp
 */
var gulp = require('gulp');


/**
 * Require the needed modules
 */
var clean  = require('gulp-clean');
var concat = require('gulp-concat');
var jade   = require('gulp-jade');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');


/**
 * Default Variables
 */
var jsFiles = ['front/app/**/*.js']
var jsDest  = 'public/assets/javascripts/';

var jadeFiles = ['front/**/*.jade', '!front/views/layouts/**/*.jade'];
var jadeDest  = 'public/';

/**
 * Scripts task
 */
gulp.task('scripts', function() {
	return gulp.src(jsFiles)	
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(concat('app.js'))
			// .pipe(uglify())
		.pipe(gulp.dest(jsDest));
});


/**
 * Views task
 */

gulp.task('views', function() {
	return gulp.src(jadeFiles)
			.pipe(jade())
		.pipe(gulp.dest(jadeDest));
});


/**
 * Watch task
 */
gulp.task('watch', ['views', 'scripts'], function() {
	gulp.watch(jsFiles, ['scripts']);
	gulp.watch(jadeFiles, ['views']);
});


/**
 * Default task
 */
gulp.task('default', ['views', 'scripts']);