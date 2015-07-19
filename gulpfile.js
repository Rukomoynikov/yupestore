var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	jade = require('gulp-jade'),
	postcss = require('gulp-postcss'),
	babel = require('gulp-babel'),
	autoprefixer = require('/Users/air/node_modules/autoprefixer/'),
	livereload = require('gulp-livereload'),
	spritesmith = require('gulp.spritesmith')
	sftp = require('gulp-sftp'),
	connect = require('gulp-connect');

gulp.task('sprite', function(){
	return gulp.src(['./assets/images/icon-heart.png', './assets/images/icon-compare.png', 
		'./assets/images/sandwich-button.png', './assets/images/arrow-to-bottom.png', 
		'./assets/images/icon-search.png', './assets/images/rateback.png',
		'./assets/images/icon-correct.png', './assets/images/icon-incorrect.png'])
	.pipe(spritesmith({
		imgName : "sprite.png",
		cssName : "sprite.css"
	}))
	.pipe(gulp.dest('assets/images/sprite'));
});

gulp.task('stylus', function(){
	var processors = [
		autoprefixer({browsers: ['last 1 version', 'IE 8', 'IE 9', 'IE 10', 'IE 11']}),
	]
	return gulp.src('./assets/css/*.styl')
		.pipe(stylus({
			// compress: true
			// linenos: true
			'include css': true
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./assets/css/'))
		.pipe(livereload())
		.pipe(connect.reload());
});

gulp.task('jade', function(){
	return gulp.src(['./*.jade'])
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./'))
		.pipe(livereload())
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(['./*.jade', './layouts/*.jade'], ['jade']);
	gulp.watch(['./assets/css/*.styl',  './assets/css/css-parts/*.styl'], ['stylus']);
})

gulp.task('connect', function(){
	connect.server({
		root : './',
		livereload : 'true'
	})
})

gulp.task('sftp', function () {
    return gulp.src('./**')
        .pipe(sftp({
            host: 'ftp.selcdn.ru',
            user: '9025',
            pass: 'y2E0LWqpXQ',
            remotePath : '/justtest/yupestore'
        }));
});

gulp.task('default', ['connect','watch', 'stylus', 'jade'])