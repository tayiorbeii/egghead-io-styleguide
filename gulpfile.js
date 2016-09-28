'use strict';

var gulp                   = require('gulp'),
    postcss                = require('gulp-postcss'),
    autoprefixer           = require('autoprefixer'),
    cssnext                = require('cssnext'),
    precss                 = require('precss'),
    browserSync            = require('browser-sync').create(),
    watch                  = require('gulp-watch');

var task = {};

var path = {
  build: {
    html: 'dist/',
    stylesheets: 'dist/assets/stylesheets/',
    img: 'dist/assets/images/',
    fonts: 'dist/assets/fonts/',
    vendors: 'dist/assets/vendors/'
  },
  src: {
    html: 'src/*.html',
    stylesheets: 'src/assets/stylesheets/main.css',
    img: 'src/assets/images/**/*.*',
    fonts: 'src/assets/fonts/**/*.*',
    vendors: 'src/assets/vendors/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    stylesheets: 'src/assets/stylesheets/**/*.css',
    img: 'src/assets/images/**/*.*',
    fonts: 'src/assets/fonts/**/*.*',
    vendors: 'src/assets/vendors/**/*.*'
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
gulp.task('stylesheets:build', task.stylesheets = function () {
  //Обработаем postCSS плагинами наш css
  var processors = [
    autoprefixer,
    cssnext,
    precss
  ];
  gulp.src(path.src.stylesheets)
    .pipe(postcss(processors))
    .pipe(gulp.dest(path.build.stylesheets)) //И в build
    .pipe(browserSync.reload({ //Обновим окно браузера
      stream: true
    }));
});

//CSS @import
// var options = {};
// gulp.task("import:build", function() {
//   gulp.src(path.src.stylesheets)
//     .pipe(cssimport(options))
//     .pipe(gulp.dest(path.build.stylesheets));
// });

// FONTS
gulp.task('fonts:build', task.fonts = function () {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// VENDORS
gulp.task('vendors:build', task.vendors = function () {
  gulp.src(path.src.vendors)
    .pipe(gulp.dest(path.build.vendors))
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

gulp.task('build', [
  'stylesheets:build',
  'html:build',
  'server:build',
  'img:build',
  'vendors:build',
  'fonts:build'
]);

gulp.task('watch', function () {
  watch([path.watch.stylesheets], function (event, cb) {
    gulp.start('stylesheets:build');
  });
  watch([path.watch.html], function (event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start('img:build');
  });
  watch([path.watch.vendors], function (event, cb) {
    gulp.start('vendors:build');
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'watch']);
