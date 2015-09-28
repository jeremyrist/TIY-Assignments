// We need the JavaScript to make the page interactive

// The interactive elements take the form of clicking on headers and having them drop down paragraphs

// Clicking on the same header should also roll the paragraphs back up

// If the classes of the headers are "headers", then jQuery would look something like this?

$(document).ready(function(){
    $("button").click(function(){
        $(".headers").hide();
    });
});

// Or maybe I didn't need to add classes and could have just done:

$(document).ready(function(){
    $("button").click(function(){
        $("h2").hide();
    });
});
