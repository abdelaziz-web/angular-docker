// karma.conf.js
module.exports = function(config) {
    config.set({
     
        browsers: ['ChromeHeadlessNoSandbox'],

        // Define custom launcher
        customLaunchers: {
          ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox', '--disable-gpu']
          }
        },
     
        // Base path that will be used to resolve all patterns (e.g. files, exclude)
      basePath: '',
  
      // Frameworks to use
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
  
      // List of files / patterns to load in the browser
      files: [
        // Include your application and test files here
        'src/**/*.js',        // Adjust based on your project structure
        'src/**/*.ts',        // Include TypeScript files as well
        'src/**/*.spec.ts',   // Assuming you're using TypeScript for tests
      ],
  
      // Pre-process matching files before serving them to the browser
      preprocessors: {
        // Source files that you want to generate coverage for
        'src/**/*.js': ['coverage'],
        'src/**/*.ts': ['coverage'], // Include TypeScript files for coverage
      },
  
      // Test results reporter to use
      reporters: ['progress', 'spec', 'coverage'],
  
      // Port for the web server
      port: 9876,
  
      // Enable / disable colors in the output (reporters and logs)
      colors: true,
  
      // Log level
      logLevel: config.LOG_INFO,
  
      // Enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
  
      // Start these browsers
      browsers: ['ChromeHeadless'],
  
      // Continuous Integration mode
      singleRun: false,
  
      // Concurrency level (how many browser should be started simultaneously)
      concurrency: Infinity,
  
      // Coverage reporter configuration
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
  
      // Plugins for reporters
      plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-jasmine-html-reporter',
        'karma-spec-reporter',
        'karma-coverage',
        '@angular-devkit/build-angular'
      ]
    });
  };