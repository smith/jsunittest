load("../../../dist/jsunittest.js");
load("../../../src/assertions.js");
load("../../../src/test_case.js");
print("");
print("== This file tests test_case.js ==");

  new Test.Unit.Runner({
    // replace this with your real tests
    setup: function() {
      this.testcase = new JsUnitTest.Unit.Testcase("name");
    },
    
    // Initial
    testInitial: function() { with(this) {
      assertEqual('name', testcase.name);
      assertEqual(0, testcase.assertions);
      assertEqual(0, testcase.failures);
      assertEqual(0, testcase.errors);
      assertEqual(0, testcase.messages.length);
    }},

    
    // Pass
    testPass: function() { with(this) {
      testcase.pass();
      assertEqual(1, testcase.assertions);
      assertEqual('passed', testcase.status(), 'Should be equal');
    }},
    
    // Info
    testInfo: function() { with(this) {
      testcase.info("xxx");
      assertEqual(0, testcase.assertions);
      assertEqual("Info: xxx", testcase.messages[0], 'Should be equal');
      assertEqual('passed', testcase.status(), 'Should be equal');
    }},

    // Fail
    testFail: function() { with(this) {
      testcase.fail("xxx");
      assertEqual(0, testcase.assertions, "Assertions");
      assertEqual(1, testcase.failures, "Failures");
      assertMatch(/^Failure: xxx/, testcase.messages[0]);
      assertEqual('failed', testcase.status(), 'Should be equal');
    }},

    // Warn
    testWarn: function() { with(this) {
      testcase.warn("xxx");
      assertEqual(0, testcase.assertions, "Assertions");
      assertEqual(0, testcase.failures, "Failures");
      assertEqual(1, testcase.warnings, "Warnings");
      assertMatch(/^Warning: xxx/, testcase.messages[0]);
      assertEqual('warning', testcase.status(), 'Should be equal');
    }},

    // Error
    testError: function() { with(this) {
      testcase.error({name: "name", message: "An Error"}, testcase);
      assertEqual(0, testcase.assertions, "Assertions");
      assertEqual(1, testcase.errors, "Errors");
      assertEqual("name: An Error(Object: { name: name, message: An Error })", testcase.messages[0], 'Should be equal');
      assertEqual('error', testcase.status(), 'Should be equal');
    }}//,
/*    
    testErrorOnFirebug : function() { with(this) {
      var results = [];
      var orig_console = window.console;
      try {
        // we need to delete the firebug console on Firefox
        // but the delete statement fails on IE
        delete window.console;
      } catch(e) {};
      window.console = {
        error: function(s) {
          results.push(s);
        }
      };
      testcase.error({name: "name", message: "An Error"}, testcase);
      var fn = function() {};
      assertEqual("Test 'name' died, exception and test follows", results[0]);
      assertEqual(fn.toString(), results[2]);
      assertHashEqual({ message: 'An Error', name: 'name' }, results[1]);
      window.console = orig_console;
    }}
*/
  }, { logger: Test.Unit.CLILogger }); 

