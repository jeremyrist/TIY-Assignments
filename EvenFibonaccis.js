var text = require('mocha').it,
  expects = require('chai').expect;

<<<<<<< HEAD
test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.be.equal([ ]);
  expect(fibonacci(1)).to.be.equal([ 1 ]);
  expect(fibonacci(2)).to.be.equal([ 1, 2 ]);
  expect(fibonacci(3)).to.be.equal([1, 2, 3]);
  expect(fibonacci(4)).to.be.equal([1, 2, 3, 5 ]);
  expect(fibonacci(5)).to.be.equal([1, 2, 3, 5, 8]);
  expect(fibonacci(6)).to.be.equal([1, 2, 3, 5, 8, 13]);
  expect(fibonacci(7)).to.be.equal([1, 2, 3, 5, 8, 13, 21]);
  expect(fibonacci(8)).to.be.eqaul([1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibonacci(9)).to.be.equal([1, 2, 3, 5, 8, 13, 21, 34, 55]);
  expect(fibonacci(10)).to.be.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
}); // END test(fibonacci)

fib = function(numMax){
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        console.log(x);
    }
};

fib(10);

test('just even numbers?', function(){
  expect(evens([ ]).to.be.equal([ ]);
  expect(evens([ 1 ]).to.be.equal([ ]);
  expect(evens([ 1, 1, 1 ]).to.be.equal([ ]);
  expect(evens([ 2 ]).to.be.equal([ 2 ]);
  expect(evens([ 1, 2 ]).to.be.equal([ 2 ]);
  expect(evens([2, 8, 34])).to.be.equal([ 44]);
  // More tests, perhaps?
}); // END test(evens)

// function evens (A, B, C){
//   if(A % 2 === 0 && B % 2 === 0 && C % 2 === 0 ){
//     return A + B + C;
//   }
// }

=======
var text = require('mocha').it,
  expects = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5 ]);
  // ...ad nauseum.
}); // END test(fibonacci)

// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens([ ]).to.deep.equal([ ]);
  expect(evens([ 1 ]).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ]).to.deep.equal([ ]);
  expect(evens([ 2 ]).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ]).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)

>>>>>>> 1fa555f9326ee15db09407b9e76ea227157d3198
test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

<<<<<<< HEAD
test('summing even Fibonacci numbers?', function(){
=======
test('summing even Fibonacci numbers?', function(){ 
>>>>>>> 1fa555f9326ee15db09407b9e76ea227157d3198
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
