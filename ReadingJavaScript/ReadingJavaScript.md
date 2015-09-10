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
  
## DOM Edition
google definition: The DOM is the way Javascript sees its containing pages' data. It is an object that includes how the HTML/XHTML/XML is formatted, as well as the browser state. A DOM element is something like a DIV, HTML, BODY element on a page. You can add classes to all of these using CSS, or interact with them using JS.

## [WINDOW OBJECT](https://developer.mozilla.org/en-US/docs/Web/API/Window)
The Window Object represents a window containing the DOM document, the document property points to the DOM document loaded in that window. Whatever this means.












## [9/10/15](https://www.youtube.com/watch?v=xXlAmRM_4yY)

## [THE EVENT TYPE](https://developer.mozilla.org/en-US/docs/Web/API/Event)

_Events are the word we use to describe JS in action._

_Events are fired._

_Any input can trigger an_ "event" _in javascript._

#### [Bubbling](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles)
* Event.bubble returns a boolean value. If it's _true_ then that means that the event bubbles up through the DOM.
* With bubbling, the event is first captured and handled by the innermost element and then spread to outer elements.
* Bubbling has to do with control flow. 
* It starts small and bubbles out.
* It can be stopped with _event.cancelBubble=true_

#### [Targets](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
* Event.target helps in delegation when it comes to bubbling.
* It tells you which DOM element triggered the event.

#### [Other events the mouse can trigger](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
* [contextmenu](https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu)
* [dblclick](https://developer.mozilla.org/en-US/docs/Web/Events/dblclick)
* [mousedown](https://developer.mozilla.org/en-US/docs/Web/Events/mousedown)
* [mouseenter](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)
* [mouseleave](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave)
* [mousemove](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove)
* [mouseout](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout)
* [mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover)
* [mouseup](https://developer.mozilla.org/en-US/docs/Web/Events/mouseup)
* [show](https://developer.mozilla.org/en-US/docs/Web/Events/show)

#### [What types of events can be triggered on a <form> element?](http://www.w3schools.com/tags/ref_eventattributes.asp)
* This is used when forms need to be filled out on the internet.
* change
* select
* submit

#### [CLICK](http://www.w3schools.com/js/js_htmldom_events.asp)
* Events can be fired when HTML gets clicked on.
* JavaScript makes websites interactive so JS is also responsible for the clicking events.

#### [SCROLL}(http://www.w3schools.com/jsref/event_onscroll.asp)
* The onscroll event is fired when a user scrolls in an HTML element.
* "onscroll" is the HTML version of the syntax. In javascript it's just referred to as "scroll".

#### [CHANGE](http://www.w3schools.com/jsref/event_onchange.asp)
* The onchange event is fired when there's a button that presents you different options that you can change. 
* Referred to as "change" in javascript.

#### [SUBMIT](http://www.w3schools.com/jsref/event_onsubmit.asp)
* This event is fired when something like a form is submitted.

#### [LOAD](http://www.w3schools.com/jsref/event_onload.asp)
* This event is fired as soon as a page loads.

#### [UNLOAD](http://www.w3schools.com/jsref/event_onunload.asp)
* This event is fired when a page unloads or a page is closed.

#### [Keyboard Events](http://www.w3schools.com/jsref/event_onkeypress.asp)
* Keyboard events can be _"keydown"_, _"keypress"_, or _"keyup"_
* These are all basically the same things that tell the page to do something when a key is pressed.
* _HOW DO YOU MAKE THE KEYBOARD LISTEN TO SPECIFIC KEYS?_


