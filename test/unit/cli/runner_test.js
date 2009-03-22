load("../../../dist/jsunittest.js");
load("../../../src/prototype/template.js");
load("../../../src/prototype/event.js");
load("../../../src/runner.js");
print("");
print("== This file tests runner.js ==");

  new Test.Unit.Runner({
    // replace this with your real tests
    setup: function() {
      JsUnitTest.Unit.Testcase = function() {};
      JsUnitTest.Unit.Testcase.prototype.run = function() {};
      JsUnitTest.Unit.Testcase.prototype.status = function() { return "passed" };
      JsUnitTest.Unit.Testcase.prototype.summary = function() { return "summary" };
      JsUnitTest.Unit.Testcase.prototype.assertions = 1;
      JsUnitTest.Unit.Testcase.prototype.failures = 0;
      JsUnitTest.Unit.Testcase.prototype.errors = 0;
      JsUnitTest.Unit.Testcase.prototype.warnings = 0;
      JsUnitTest.Unit.Logger = function() {};
      JsUnitTest.Unit.Logger.prototype.start = function() {};
      JsUnitTest.Unit.Logger.prototype.finish = function() {};
      JsUnitTest.Unit.Logger.prototype.summary = function() {};
      this.runner = new JsUnitTest.Unit.Runner({
        testDoNothing : function() {},
        testDoNothing2 : function() {}
      }, { logger : Test.Unit.CLILogger });
    },
    // Initially
    testInitially: function() { with(this) {
      assertEqual(2, runner.tests.length);
      assertEqual(0, runner.currentTest);
    }},

    // Results after tests
    testResultsAfterTests: function() { with(this) {
      runner.runTests();
      var results = runner.getResult();
      assertEqual(2, results.assertions);
      assertEqual(0, results.errors);
      assertEqual(0, results.failures);
      assertEqual(0, results.warnings);
      assertEqual("2 tests, 2 assertions, 0 failures, 0 errors, 0 warnings", runner.summary());
    }}

    
  }, { logger: Test.Unit.CLILogger }); 

