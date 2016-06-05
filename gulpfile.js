var gulp = require('gulp');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserSync']);

gulp.task('browserSync', ['sass', 'js'], function(){
    browserSync.init(null, {
        proxy: 'grafica.app',
        files: [
            'public/*.php',
            'public/**/*.php',
            'public/*.html',
            'public/**/*.html'
        ],
        port: 7000
    });

    gulp.watch("coffee/*.coffee", ['js']).on('error', gutil.log);
    gulp.watch("coffee/**/*.coffee", ['js']).on('error', gutil.log);
    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch("public/js/*.js").on('change', browserSync.reload);
});


gulp.task('coffee', function(){
    return gulp.src(['coffee/*.coffee', 'coffee/**/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('scripts'))
        .pipe(browserSync.stream());
});

gulp.task('js', ['coffee'], function() {
    return gulp.src(['scripts/*.js', 'scripts/**/*.js'])
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