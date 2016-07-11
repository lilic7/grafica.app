var gulp = require('gulp');
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var Server = require('karma').Server;

function browser_sync(){
    browserSync.init(null, {
        proxy: 'grafica.app',
        files: [
            'public/*.html',
            'public/**/*.html'
        ],
        port: 7000
    });
}

function watch() {
    gulp.watch("coffee/app/**/*.coffee", buildApp).on('error', gutil.log);
    gulp.watch("coffee/test/**/*.coffee", buildSpec).on('error', gutil.log);
    gulp.watch("coffee/app/**/*.html", appHtml);
    gulp.watch("sass/*.sass", Sass);
    gulp.watch("public/js/*.js").on('change', browserSync.reload);
}


function appHtml() {
    return gulp.src(['coffee/app/**/*.html'])
        .pipe(gulp.dest('public/app'));
}

function coffeeApp(){
    return gulp.src(['coffee/app/*.coffee', 'coffee/app/**/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('public/app'));
}

function coffeeTest(){
    return gulp.src(['coffee/test/*.coffee', 'coffee/test/**/*.coffee'])
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('test'));
}

function js() {
    return gulp.src(['public/app/*.js', 'public/app/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
}

function Sass(){
    return gulp.src('sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
}

function test(done){
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
}

buildSpec = gulp.series(coffeeTest, test);
buildApp = gulp.series(coffeeApp, test, js);


gulp.task('buildSpec', buildSpec);
gulp.task('buildApp', buildApp);


gulp.task('default',
    gulp.series(coffeeApp, coffeeTest,
        gulp.parallel(Sass, appHtml, js, watch, test)));
        //gulp.parallel(Sass, appHtml, js, watch, gulp.parallel(test, browser_sync))));