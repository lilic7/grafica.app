var sharedConfig = require('./karma-shared.conf');

module.exports = function (config) {

    var conf = sharedConfig();
    conf.files = conf.files.concat([
        // extra testing code
        'node_modules/angular-mocks/angular-mocks.js',

        //test files
        './test/unit/**/*.spec.js'
    ]);
    config.set(conf);
};