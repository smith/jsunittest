load("../../../dist/jsunittest.js");
load("../../../src/assertions.js");
print("This file tests assertions.js");

  var testObj = {
    isNice: function() {
      return true;
    },
    isBroken: function() {
      return false;
    }
  }

  new Test.Unit.Runner({
    setup: function() {
      this.testcss1      = document.getElementById('testcss1');
      this.testcss1_span = document.getElementById('testcss1_span');
      this.tlist         = document.getElementById('tlist');
    },
    
    testMessage: function() { with(this) {
      info("No mechanism to report success/failure @ moment")
    }},

    testAssertEqual: function() { with(this) {
      assertEqual(0, 0);
      assertEqual(0, 0, "test");
      
      assertEqual(0,'0');
      assertEqual(65.0, 65);
      
      assertEqual("a", "a");
      assertEqual("a", "a", "test");
      
      assertEqual("A\nnew line", "A\nnew line", "New lines");
      assertEqual("A\x18special char", "A\x18special char", "Other special char");
      
      assertNotEqual(0, 1);
      assertNotEqual("a","b");
      assertNotEqual({},{});
      assertNotEqual([],[]);
      assertNotEqual([],{});
    }},

    testAssertEnumEqual: function() { with(this) {
      assertEnumEqual([], []);
      assertEnumEqual(['a', 'b'], ['a', 'b']);
      assertEnumEqual(['1', '2'], [1, 2]);
      assertEnumNotEqual(['1', '2'], [1, 2, 3]);
    }},
    
    testAssertHashEqual: function() { with(this) {
      assertHashEqual({}, {});
      assertHashEqual({a:'b'}, {a:'b'});
      assertHashEqual({a:'b', c:'d'}, {c:'d', a:'b'});
      assertHashNotEqual({a:'b', c:'d'}, {c:'d', a:'boo!'});
    }},
    
    testAssertRespondsTo: function() { with(this) {
      assertRespondsTo('isNice', testObj);
      assertRespondsTo('isBroken', testObj);
    }},
    
    testAssertIdentical: function() { with(this) { 
      assertIdentical(0, 0); 
      assertIdentical(0, 0, "test"); 
      assertIdentical(1, 1); 
      assertIdentical('a', 'a'); 
      assertIdentical('a', 'a', "test"); 
      assertIdentical('', ''); 
      assertIdentical(undefined, undefined); 
      assertIdentical(null, null); 
      assertIdentical(true, true); 
      assertIdentical(false, false); 
      
      var obj = {a:'b'};
      assertIdentical(obj, obj);

      assertNotIdentical({1:2,3:4},{1:2,3:4});

      assertIdentical(1, 1.0); // both are typeof == 'number'

      assertNotIdentical(1, '1');
      assertNotIdentical(1, '1.0');
    }},
    
    testAssertNullAndAssertUndefined: function() { with(this) {
      assertNull(null);
      assertNotNull(undefined);
      assertNotNull(0);
      assertNotNull('');
      assertNotUndefined(null);
      assertUndefined(undefined);
      assertNotUndefined(0);
      assertNotUndefined('');
      assertNullOrUndefined(null);
      assertNullOrUndefined(undefined);
      assertNotNullOrUndefined(0);
      assertNotNullOrUndefined('');
    }},
    
    testAssertMatch: function() { with(this) {
      assertMatch(/knowmad.jpg$/, 'http://scripaculo.us/images/knowmad.jpg');
      assertMatch(/Fuc/, 'Thomas Fuchs');
      assertMatch(/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/, '$19.95');
      assertMatch(/(\d{3}\) ?)|(\d{3}[- \.])?\d{3}[- \.]\d{4}(\s(x\d+)?){0,1}$/, '704-343-9330');
      assertMatch(/^(?:(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[1,3-9]|1[0-2])\2(29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8]))))$/, '2001-06-16');
      assertMatch(/^((0?[123456789])|(1[012]))\s*:\s*([012345]\d)(\s*:\s*([012345]\d))?\s*[ap]m\s*-\s*((0?[123456789])|(1[012]))\s*:\s*([012345]\d)(\s*:\s*([012345]\d))?\s*[ap]m$/i, '2:00PM-2:15PM');
      assertNoMatch(/zubar/, 'foo bar');
    }},
    
    testAssertInstanceOf: function() { with(this) {
      assertInstanceOf(String, new String);
      assertInstanceOf(RegExp, /foo/);
      assertNotInstanceOf(String, {});
    }},
    
    testHasClass: function() { with(this) {
      // <div id="test_1" class="a bbbbbbbbbbbb cccccccccc dddd"> </div>
      assertHasClass('test_1', 'a');
      assertHasClass(document.getElementById('test_1'), 'dddd');
    }},
    
    testNotHasClass: function() { with(this) {
      // <div id="test_1" class="a bbbbbbbbbbbb cccccccccc dddd"> </div>
      assertNotHasClass('test_1', 'abc');
      assertNotHasClass(document.getElementById('test_1'), 'ddd');
    }},
    
    testAssertVisible: function() { with(this) {
      assertVisible('testcss1');
      assertNotVisible('testcss1_span');
      //assertNotVisible('testcss2', "Due to a Safari bug, this test fails in Safari.");
      
      // Elemenhide('testcss1');
      testcss1.style.display = "none";
      assertNotVisible('testcss1');
      assertNotVisible('testcss1_span');
      // Elemenshow('testcss1');
      testcss1.style.display = "block";
      assertVisible('testcss1');
      assertNotVisible('testcss1_span');
      
      // Elemenshow('testcss1_span');
      testcss1_span.style.display = "block";
      assertVisible('testcss1_span');
      // Elemenhide('testcss1');
      testcss1.style.display = "none";
      assertNotVisible('testcss1_span'); // hidden by parent
    }},

    testAssertElementsMatch: function() { with(this) {
      assertElementsMatch([tlist], '#tlist');   
      assertElementMatches(tlist,  '#tlist');   
    }}
  }, { logger: Test.Unit.CLILogger }); 

