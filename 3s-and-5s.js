var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('getting a list of multiples of 3', function(){
  var sum = 0;
  for (var i = 0; i < 1000; i++){
    if (i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
      return sum;
}); // END test 3s



console.assert('Sum: %d');
