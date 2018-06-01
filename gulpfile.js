'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');


// COMPILA TODOS LOS SCSS
gulp.task('compilar', function () {
	var processors = [
        autoprefixer({
        	browsers: ['last 2 versions', '>10%'] 
        })
    ];

	gulp.src('./assets/scss/*.scss')
	    .pipe(sass.sync().on('error', sass.logError))
	    .pipe(postcss(processors))
	    .pipe(gulp.dest('./assets/css/'));
});

// WATCH: COMPILA AUTOMATICAMENTE TODOS LOS SCSS
gulp.task('observar', function () {
  gulp.watch('./assets/scss/**/*.scss', ['compilar']);
});

// COMPILA Y COMPRIME TODOS LOS SCSS
gulp.task('comprimir', function () {
	var processors = [
        autoprefixer({ browsers: ['last 2 versions', '>10%'] })
    ];

	gulp.src('./assets/scss/*.scss')
	    .pipe(sass.sync().on('error', sass.logError))
	    .pipe(postcss(processors))
	    .pipe(cssnano())
	    .pipe(gulp.dest('./assets/css/'));
});
