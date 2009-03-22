load("../../../dist/jsunittest.js");
load("../../../src/logger/cli.js");
print("");
print("== This file tests logger/cli.js ==");

  new Test.Unit.Runner({
    // replace this with your real tests
    setup: function() {
      //this.logger = new JsUnitTest.Unit.Logger('testlog_test');
      //this.testlog_test = JsUnitTest.$('testlog_test');
      //this.tbody = this.testlog_test.getElementsByTagName('tbody')[0];
    },
    
    // Initially
    testInitially: function() { with(this) {
      //var divs = testlog_test.getElementsByTagName('div');
      //assertEqual("logsummary", divs[0].className, 'First div should be logsummary');
      //assertEqual("running...", divs[0].innerHTML, 'First div should be logsummary');
      //var initialRows = tbody.getElementsByTagName('tr').length;
      //assertEqual(0, initialRows);
    }},

    // Logger start
    testLoggerStart: function() { with(this) {
      //var initialRows = tbody.getElementsByTagName('tr').length;
      //logger.start("some test");
      //var finalRows = tbody.getElementsByTagName('tr').length;
      //assertEqual(initialRows + 1, finalRows, 'Should be new tr');
      //assertEqual("some test", tbody.getElementsByTagName('td')[0].innerHTML);
      //logger.start("some test");
      //var finalRows = tbody.getElementsByTagName('tr').length;
      //assertEqual(initialRows + 2, finalRows, 'Should be 2 trs');
    }},

    // Set status should update current log line
    testSetStatusShouldUpdateCurrentLogLine: function() { with(this) {
      //logger.start("some test");
      //logger.setStatus("some status");
      //logline = logger.getLastLogLine();
      //assertEqual("some status", logline.getElementsByTagName('td')[1].innerHTML);
    }},
    
    // Message should update current log line
    testMessageShouldUpdateCurrentLogLine: function() { with(this) {
      //logger.start("some test");
      //logger.message("some message");
      //logline = logger.getLastLogLine();
      //assertEqual("some message", logline.getElementsByTagName('td')[2].innerHTML);
    }},

    // Summary
    testSummary: function() { with(this) {
      //logger.start("test 1");
      //logger.summary("some summary");
      //assertMatch(/some\ssummary/, testlog_test.innerHTML);
    }}

    
      
  }, {testLog: "testlog", logger: Test.Unit.CLILogger }); 
  // For each Test.UnitRunner instance, specify the element id where results will be
  // published; e.g. <div id="testlog"/> above.
  // That is, you can have multiple "new Test.Unit.Runner() { ... }" on this page, just
  // create more <div id="testlog2"></div> etc, and pass the element id to the hash above:
  // e.g. {testLog: "testlog2"}
// ]]>

