Basic Literal Types ===
null
Boolean (true or false)
Number
String
null: is used as a place holder for when you want nothing to be represented

Booleans: return either true or false

Numbers: are numbers but only integers and rational numbers

Strings: are words that are bookended with quotation marks, either one or two

Basic Operators ===
Arithmetic can be used in javascript just like in normal math classes. Addition is addition and subtraction is subtraction. Everything works exactly the same when dealing with numbers but when dealing with Booleans or strings things get more complicated.

Comparisons do what you would expect comparisons to do. Their output is based off of whether or not the equation is true or false.

Assignments are used to stick the right to the left. This is most commonly used with equals signs.


##[Array] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

An array is an ordered collection of data.

##### Example:

var hiphop = ["Tupac", "Biggie", "NaS", "Jay-Z", "Eminem"];

console.log(hiphop.length);

//5

### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)
Methods are used to modify arrays as a whole

##### Examples:

#### [`Array.protoype.copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

Copies the sequence of array elements within the array

#### [`Array.prototype.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

Fills all the elements from a start index to an end index with a static value

#### [`Array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

Removes the last element of the array

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Examples

var hiphop = ["Tupac", "Biggie", "NaS", "Jay-Z", "Eminem"];

console.log(hiphop);   //"Tupac", "Biggie", "NaS", "Jay-Z", "Eminem"

var popped = hiphop.pop();

console.log(hiphop);   //"Tupac", "Biggie", "NaS", "Jay-Z"

console.log(popped);   //"Eminem"

###Length
The length of an array is dependent on how many primitive values are inside the array.

###2 Array.prototype examples

#### [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Creates a new array with all elements that pass the test implemented by the provided function.

function isAnA(value){
  return value === "a";
}
var filtered = ["a", "b", "c", "b", "a"].filter(isAnA);
// filtered is ["a", "a"]

#### [`Array.prototype.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

Removes the first element of the array and returns it. Like the opposite of Array.prototype.pop.

var hiphop = ["Tupac", "Biggie", "NaS", "Jay-Z", "Eminem"];

console.log(hiphop);   //"Tupac", "Biggie", "NaS", "Jay-Z", "Eminem"

var shifted = hiphop.shift();

console.log(hiphop);   //"Biggie", "NaS", "Jay-Z", "Eminem"

console.log(shifted);   //"Tupac"
  
