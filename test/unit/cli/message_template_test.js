load("../../../dist/jsunittest.js");
load("../../../src/message_template.js");
print("This file tests message_template.js.");

  new Test.Unit.Runner({
    testBuildMessage:  function() {
      this.assertEqual("'foo' 'bar'", this.buildMessage('', '? ?', 'foo', 'bar'))
      // this.assertEqual("<'foo'> 'bar'", this.buildMessage('', '<?> ?', 'foo', 'bar'))
    }

    
  }, { logger: Test.Unit.CLILogger }); 

