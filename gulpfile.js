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
 * Javascript files
 */
var jsFiles = ['back/**/*.js'];


/**
 * Lint task
 */
gulp.task('lint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


/**
 * Watch task
 */
gulp.task('watch', ['lint'], function() {
	gulp.watch(jsFiles, ['lint']);
});


/**
 * Default task
 */
gulp.task('default', ['lint']);