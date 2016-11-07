module.exports = function (config) {
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
        basePath: '',

        // files to include, ordered by dependencies
        files: [
            // include relevant Angular files and libs
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular-datatables/vendor/datatables/media/js/jquery.dataTables.min.js',
            'node_modules/angular-datatables/vendor/datatables-buttons/js/dataTables.buttons.js',
            'node_modules/angular-datatables/vendor/datatables-buttons/js/buttons.bootstrap.js',
            'node_modules/angular-datatables/vendor/datatables-buttons/js/buttons.flash.js',
            'node_modules/angular-datatables/vendor/datatables-buttons/js/buttons.html5.js',
            'node_modules/angular-datatables/vendor/datatables-buttons/js/buttons.print.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'node_modules/angular-resource/angular-resource.min.js',
            'node_modules/angular-sanitize/angular-sanitize.min.js',
            'node_modules/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-datatables/dist/angular-datatables.min.js',
            'node_modules/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js',

            // include angular-mocks from node_modules
            'node_modules/angular-mocks/angular-mocks.js',

            // include js files from the app itself
            'src/main/webapp/app/app.js',
            'src/main/webapp/**/*.js',

            // Include our page & directive templates.
            'src/main/webapp/**/*.html',

            // include unit test files
            'src/test/webapp/**/*.js'
        ],
        // files to exclude
        exclude: [
            // no excludes at this time.
        ],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch: false,

        // testing framework, be sure to install the karma plugin
        frameworks: ['jasmine'],

        // browsers to test against, be sure to install the correct karma browser launcher plugin
        browsers: ['PhantomJS'],

        // map of preprocessors that is used mostly for plugins
        preprocessors: {
            'src/main/webapp/**/*.js': 'coverage',
            'src/main/webapp/**/*.html': ['ng-html2js']
        },

        // progress is the default reporter
        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'target/surefire-reports/TESTS-xunit.xml'
        },

        coverageReporter: {
            reporters: [
                {
                    type: 'cobertura',
                    dir: 'target/',
                    subdir: 'karma-coverage',
                    file: "code-coverage.xml"
                },
                {
                    type: 'lcov',
                    dir: 'target/',
                    subdir: 'karma-coverage'
                }
            ]
        },

        ngHtml2JsPreprocessor: {
            'stripPrefix': 'src/main/webapp/',
            moduleName: 'testTemplates'
        },

        // Only run once in CI mode
        singleRun: true,

        // list of karma plugins
        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ]
    })
};
