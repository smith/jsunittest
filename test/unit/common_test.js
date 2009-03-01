  var test = new Test.Unit.Runner({
    testScan: function() {with(this) {
      var source = 'foo boo boz', results = [];
      var str = JsUnitTest.scan(source, /[o]+/, function(match) {
        results.push(match[0].length);
      });
      assertEnumEqual([2, 2, 1], results);
      assertEqual(source, JsUnitTest.scan(source, /x/, fail));
      assert(typeof str == 'string');
    }},
    // hash to sorted array
    testHashToSortedArray: function() { with(this) {
      var expected = [ ['a', 1], ['b', 2], ['zzz', 0]];
      var actual = JsUnitTest.hashToSortedArray({zzz:0, b:2, a:1});
      assertEnumEqual(expected, actual);
    }},

    // Flatten
    testFlatten: function() { with(this) {
      var original = [ ['a', 1], ['b', 2], ['zzz', [1,2,3]]];
      var expected = [ 'a', 1, 'b', 2, 'zzz', 1, 2, 3];
      var actual   = JsUnitTest.flattenArray(original);
      assertEnumEqual(expected, actual);
    }}

    
  }); 

test.output();