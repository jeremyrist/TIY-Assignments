// The View Mode Switch is designed to let you select a drink and pay for it
// within the website.

// The JavaScript on the site allows you to look at the bottles in a different style, grid or list

// var switcher = document.getElementById('cbp-vm');
//
// var grid = switcher.firstChild;
// var list = switcher.lastChild;
//
// console.log(grid);
// console.log(list);
//
// list.addEventListener('click', function(){
//
// grid.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
// list.className = 'cbp-vm-icon cbp-vm-list';
//
//   console.log(grid);
//   console.log(list);
//
// });
//

console.log("heyo");

var page = window.location.href; // Identifies the page that you're on
// I think we need to define gridView but I'm not sure how to do that...
var switcher = document.getElementById('cbp-vm');

document.addEventListener("click", function(){ // Adds an event listener method and assigns it the click event
    document.removeEventListener( "click", listView.callee, false); // I think callee is helpful here because it tells the function to pay attention
    switch(page){
      case gridView:
        document.getElementByClassName('cbp-vm-icon cbp-vm-grid').className += ' cbp-vm-selected' // This adds another className to the gridView
        break;
      case listView:
        document.getElementByClassName('cbp-vm-icon cbp-vm-grid').className += ' cbp-vm-selected' // This adds another className to the listView
        break;
    }
});

// If this is correct it looks like jQuery simplifies by shortening the "document.elementInstructions" part to just a $
$(".cbp-vm-icon cbp-vm-grid").on('click', function());

// var buttonGridView = document.querySelector('.cbp-vm-grid');
// var buttonListView = document.querySelector('.cbp-vm-list');
//
// console.log(buttonGridView);
//   buttonGridView.addEventListener('click', function() {
//       console.log("TRACER BULLET");}
// );
//
// console.log(buttonListView);
//   buttonListView.addEventListener('click', function() {
//       console.log("TRACER BULLET");
// });

var switcher = document.getElementById('cbp-vm');

var grid = switcher.firstChild;
var list = switcher.lastChild;

console.log(grid);
console.log(list);

list.addEventListener('click', function(){

grid.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
list.className = 'cbp-vm-icon cbp-vm-list';

 console.log(grid);
 console.log(list);

});
