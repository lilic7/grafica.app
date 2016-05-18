var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserSync']);

gulp.task('browserSync', function(){
    browserSync.init(null, {
        proxy: 'grafica.app',
        files: [
            'public/*.php',
            'public/**/*.php'
        ],
        port: 7000
    });
});