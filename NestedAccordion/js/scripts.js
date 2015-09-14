// For every word that is the color blue,
// make it clickable and drop down
// to reveal more detailed descriptions of the blue words.

// The arrows are light gray unless you hover over it with the mouse.
// Then they become blue.

// We will need DOM along with JavaScript to do this.

// Tag script source to scripts.js to link the JavaScript and the HTML.
// This will connect the two so that the website can come alive!

// We have to remember to have the .js file and the .html file in the same
// big folder, for this example the NestedAccordion.

// We need to connect our JavaScript to the class name that controls the blue words.

// Maybe we need to "push" and "pop" the paragraph like we would with an array.

// We want an onclick event handler to drop down the descriptions, which is a DOM property?

//CHANGE!

// What does it do?
// When I click
//   on a heading...
// var heading = document.querySelector('.cbp-nttrigger'); // Defined heading as a class
//
// heading.addEventListener('click', function(){ // Added an event listener to the heading and set it to event type 'click'
//
//   if (document.querySelector("li").className !== "cbp-ntopen"){ // The method querySelector selects the first element li and allows it to be closed by saying it's not equal to class name cbp-ntopen
//     document.querySelector("li").className = "cbp-ntopen";
//     return true;
//   }
//     if (document.querySelector("li").className === "cbp-ntopen"){ // If the className is strictly equal to cbp-ntopen
//       document.querySelector("li").className = null; // The event click changes the className to null
//       return true;
//     }
// });
