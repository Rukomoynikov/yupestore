var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	jade = require('gulp-jade'),
	postcss = require('gulp-postcss'),
	babel = require('gulp-babel'),
	autoprefixer = require('/Users/air/node_modules/autoprefixer/'),
	livereload = require('gulp-livereload');

gulp.task('css', function(){
	var processors = [
		autoprefixer({browsers: ['last 1 version', 'IE 8', 'IE 9', 'IE 10', 'IE 11']}),
	]
	return gulp.src('./assets/css/*.styl')
		.pipe(stylus())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(livereload())
});

gulp.task('jade', function(){
	return gulp.src('./*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
	livereload.listen({
		port : 8080,
		basePath : '/',
		host : 'localhost'
	})
	gulp.watch('./*.jade', ['jade']);
	gulp.watch('./assets/css/*.styl', ['css']);
})

gulp.task('default', ['watch', 'css', 'jade'])