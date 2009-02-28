  new Test.Unit.Runner({
    // Library
    testLibrary: function() { with(this) {
      assert(JsUnitTest.Template);
      assert(new JsUnitTest.Template(""));
    }},

    // Empty string
    testEmptyString: function() { with(this) {
      assertEqual('', new JsUnitTest.Template("").evaluate("asd"));
    }},

    testInterpolate: function() {with(this) {
      var subject = { name: 'Stephan' };
      var pattern = /(^|.|\r|\n)(#\((.*?)\))/;
      assertEqual('#{name}: Stephan', new JsUnitTest.Template('\\#{name}: #{name}').evaluate(subject));
      assertEqual('#(name): Stephan', new JsUnitTest.Template('\\#(name): #(name)', pattern).evaluate(subject));
    }},
    
      
  }); 

