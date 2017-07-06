/*----------  Récupération des modules  ----------*/

const gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),

	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*----------  Styles  ----------*/

// Compass task
gulp.task('styles', function() {
	return gulp.src(['assets/scss/*.scss'])
		.pipe(compass({
		 	css: 'assets/css/dev',
			sass: 'assets/scss',
			image: 'assets/img'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    	.pipe(gulp.dest('assets/css/dev'))
    	.pipe(rename({ suffix: '.min' }))
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('assets/css/min'));
});

/*----------  Scripts  ----------*/

gulp.task('scripts', function() {
	return gulp.src('assets/js/dev/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('assets/js/dev'))
		.pipe(rename({ basename:'script', suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/min'))
});

/*----------  Live  ----------*/

// Watch task
gulp.task('watch', function() {
	gulp.watch('./assets/scss/*.scss', ['styles']);
	gulp.watch('./assets/js/dev/*.js', ['scripts']);
});

/*----------  Defaut  ----------*/

// Default task
gulp.task('default', ['styles', 'scripts', 'watch']);