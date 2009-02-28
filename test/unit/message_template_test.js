  var test = new Test.Unit.Runner({
    testBuildMessage:  function() {
      this.assertEqual("'foo' 'bar'", this.buildMessage('', '? ?', 'foo', 'bar'))
      // this.assertEqual("<'foo'> 'bar'", this.buildMessage('', '<?> ?', 'foo', 'bar'))
    }
  }); 

test.output();
