var gulp = require('gulp');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserSync']);

gulp.task('browserSync', ['sass', 'js', 'appHtml'], function(){
    browserSync.init(null, {
        proxy: 'grafica.app',
        files: [
            'public/*.html',
            'public/**/*.html'
        ],
        port: 7000
    });

    gulp.watch("app/*.coffee", ['js']).on('error', gutil.log);
    gulp.watch("app/**/*.coffee", ['js']).on('error', gutil.log);
    gulp.watch("app/**/*.html", ['appHtml']);
    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch("public/js/*.js").on('change', browserSync.reload);
});

gulp.task('appHtml', function () {
    return gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('public/app'));
});

gulp.task('coffee', function(){
    return gulp.src(['app/*.coffee', 'app/**/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('public/app'));
});

gulp.task('js', ['coffee'], function() {
    return gulp.src(['public/app/*.js', 'public/app/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function(){
    return gulp.src('sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});