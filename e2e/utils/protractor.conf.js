// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var Jasmine2HtmlReporter = require('../../node_modules/protractor-jasmine2-html-reporter');

var today = new Date(),
  timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

var htmlReporter = new Jasmine2HtmlReporter({
  consolidateAll: true,
  savePath: '../reporter/HtmlReporter',
  takeScreenshotsOnlyOnFailures: true,
  filePrefix: 'index -'+today
});

var AllureReporter = require('../../node_modules/jasmine-allure-reporter');

var allureReporter = new AllureReporter({
  resultsDir: '../reporter/allure-results'
});

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './../**/test/*.e2e.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: false,
  baseUrl: 'https://yandex.by/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    jasmine.getEnv().addReporter(htmlReporter);

    jasmine.getEnv().addReporter(allureReporter);
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};


