// Array containing the names, images, and number of clicks for each puppy.
var puppies = [
    {
        "name": "Fido",
        "pic": "images/puppy-1.jpg",
        "clicks": 0
    },
    {
        "name": "Buddy",
        "pic": "images/puppy-2.jpg",
        "clicks": 0
    },
    {
        "name": "Hunter",
        "pic": "images/puppy-3.jpg",
        "clicks": 0
    },
    {
        "name": "Timber",
        "pic": "images/puppy-4.jpg",
        "clicks": 0
    },
    {
        "name": "Cooper",
        "pic": "images/puppy-5.jpg",
        "clicks": 0
    }
];

// Creates the visible puppy list in the DOM but doesn't include the click
// handler for displaying puppy data. This is done later.
function createPuppyList() {
    var toAppend = "";
    // $.each() lets you iterate over a JavaScript object or an array. Not the
    // same as $(selectior).each().
    // In this case, the puppies array is passed to $.each().

    // See http://api.jquery.com/jquery.each/.
    // If $.each() passes in an array, an anonymous function can use index and
    // value variables, which this anonymous function does.
    $.each(puppies, function(puppyIndex, puppy) {
        // Each entry in puppies gets embedded in a <li> item and stored in
        // toAppend.
        toAppend += "<li class='puppy list-group-item'>" + puppy.name + "</li>";
    });
    // Wrap the toAppend variable inside a <ul>.
    $("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
}

// Display puppy data in the DOM and add the click incrementer.
function displayPuppy(id) {
    // When displayPuppy runs, clear #display.
    $("#display").empty();
    // Retrieve relevant puppy object from puppies. id is the variable passed
    // into the function.
    var puppy = puppies[id];

    // toDisplay creates a div, img, and div, which then gets appended to
    // <div id='display'>. The resulting DOM looks like this:

    // <div id='display'>
    //     <div class='name'>
    //     <img class='clickable'>
    //     <div id='{id}'>
    var toDisplay =
        "<div><p class='name'>" + puppy.name + "</p></div>" +
        "<img class='clickable' src='" + puppy.pic + "'/>" +
        "<div id='" + id.toString() + "'>" +
            "Clicks: " + puppy.clicks.toString() +
        "</div>";
    $("#display").append(toDisplay);
    // When the img is clicked, it triggers the anonymous function and passes
    // the clickable object in
    $(".clickable").click(function(object) {
        // elem uses native JavaScript DOM properties to 'retrieve'
        // <div id='{id}'>.
        var elem = object.target.parentElement.childNodes[2];
        // Increment clicks in the puppies array
        puppies[elem.id].clicks += 1;
        // Reset <div id='{id}'> to include the incremented clicks value
        $("#" + elem.id).text("Clicks: " + puppies[elem.id].clicks);
    });
}

// Run createPuppyList() and displayPuppy(), plus add the click incrementer
// to each item in the puppies array.
// Run this JavaScript when the DOM is fully loaded and safe to manipulate.
$(document).ready(function() {
    // Run createPuppyList();
    createPuppyList();
    // When any .puppy class is clicked -- see createPuppyList().
    $(".puppy").click(function(obj) {
        // Get the id of the puppies array value which contains the name of the
        // puppy
        id = puppies.indexOf(puppies.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
        // Run displayPuppy with the id value passed in
        displayPuppy(id);
    });
});