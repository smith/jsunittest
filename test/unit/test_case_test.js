  var test = new Test.Unit.Runner({
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
      testcase.error({name: "name", message: "An Error"});
      assertEqual(0, testcase.assertions, "Assertions");
      assertEqual(1, testcase.errors, "Errors");
      assertEqual("name: An Error([object Object])", testcase.messages[0], 'Should be equal');
      assertEqual('error', testcase.status(), 'Should be equal');
    }},

  }); 

test.output();
