module.exports = function () {
    return {
        basePath: '../',
        frameworks: ['jasmine'],
        reporters: ['spec', 'coverage'],
        browsers: ['Chrome'], //browsers: ['Chrome', 'Firefox'],
        autoWatch: true,

        singleRun: true,
        colors: true,

        files: [
            // 3rd Party Code
            'public/assets/libs/angular/angular.js',
            'public/assets/libs/angular-material/angular-material.js',
            'public/assets/libs/angular-animate/angular-animate.js',
            'public/assets/libs/angular-aria/angular-aria.js',
            'public/assets/libs/angular-route/angular-route.js',

            // App Code
            'public/app/**/*.js',
            'public/app/**/*.html',


            // Test Code
            'node_modules/angular-mocks/angular-mocks.js'
        ]
    }
};