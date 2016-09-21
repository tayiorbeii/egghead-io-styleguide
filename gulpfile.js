'use strict';

var gulp                   = require('gulp'),
    sass                   = require('gulp-sass'),
	  autoprefixer           = require('gulp-autoprefixer'),
  	browserSync            = require('browser-sync').create(),
  	watch                  = require('gulp-watch');

var task = {};

var path = {
    build: {
    	html: 'dist/',
      stylesheets: 'dist/assets/stylesheets/',
      img: 'dist/assets/images/',
      javascript: 'dist/assets/javascript/',
      fonts: 'dist/assets/fonts/'
    },
    src: {
    	html: 'src/*.html',
      stylesheets: 'src/assets/stylesheets/main.scss',
      img: 'src/assets/images/**/*.*',
      javascript: 'src/assets/javascript/**/*.js',
      fonts: 'src/assets/fonts/**/*.*'
    },
    watch: {
      html: 'src/**/*.html',
      stylesheets: 'src/assets/stylesheets/**/*.scss',
      img: 'src/assets/images/**/*.*',
      javascript: 'src/assets/javascript/**/*.js',
      fonts: 'src/assets/fonts/**/*.*'
    }
};

// HTML
gulp.task('html:build', task.html = function () {
	return gulp.src(path.src.html)
	  .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Stylesheets
gulp.task('sass:build', function () {
  return gulp.src(path.src.stylesheets)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(path.build.stylesheets))
    .pipe(browserSync.reload({
        stream: true
    }));
});


// Javascript
gulp.task('javascript:build', task.javascript = function () {
	return gulp.src(path.src.javascript)
    .pipe(gulp.dest(path.build.javascript))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// FONTS
gulp.task('fonts:build', task.fonts = function () {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Images
gulp.task('img:build', task.img = function () {
	gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// Server
gulp.task('server:build', function() {
  browserSync.init({
    port : 3200,
    server: {
        baseDir: 'dist'
    },
    open: true
  });
});


gulp.task(
  'build', [
    'html:build',
    'sass:build',
    'server:build',
    'img:build',
    'javascript:build',
    'fonts:build'
  ]
);

gulp.task('watch', function () {
    watch([path.watch.stylesheets], function (event, cb) {
        gulp.start('sass:build');
    });
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('img:build');
    });
    watch([path.watch.javascript], function (event, cb) {
        gulp.start('javascript:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'watch']);



