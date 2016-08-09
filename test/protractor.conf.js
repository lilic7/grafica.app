exports.config = {

    framework: 'jasmine',

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:9999/',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
        'test/e2e/**/*.js'
    ],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};