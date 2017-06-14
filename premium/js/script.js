/* ========== Model ========== */
// Per the MVO approach, the model contains the data used in our web app.
var model = {
    // Contains the appropriate puppy from the puppies array. Set to empty by
    // default because when the app loads the user hasn't selected a puppy.
    // When the user does select a puppy, model.currentPuppy serves as an alias
    // to the selected puppy. You can then update the click count by just using
    // model.currentPuppy.clicks++.
    currentPuppy: "",

    // Array containing the puppies data.
    puppies: [
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
    ]
};

/* ========== Octopus ========== */
// The octopus interfaces between the view and the model. The view and the
// model never directly communicate.
var octopus = {
    init: function() {
        // Octopus initializes view components.
        // Two separate view components is better for simplicity since each
        // component serves a different purpose.
        puppyListView.init();
        puppyView.init();
    },

    // Return the data about the current puppy for use in the view.
    getCurrentPuppy: function() {
        return model.currentPuppy;
    },

    // Return the data about all of the puppies for use in the view.
    getPuppies: function() {
        return model.puppies;
    },

    // Change the current puppy to the one clicked on by the user.
    setCurrentPuppy: function(puppy) {
        model.currentPuppy = puppy;
    },

    // Increment the clicks for the given puppy. Due to the setup for the
    // currentPuppy var, when you increment the counter you directly update
    // the clicks value in the array.
    incrementCounter: function() {
        model.currentPuppy.clicks++;
        puppyView.render();
    }
};

/* ========== View ========== */
// The view controls the display -- what users see in the web app.
// Order of the view variables doesn't matter but for personal preference it
// makes sense to render the puppy list first, then render the puppy view.
var puppyListView = {
    init: function() {
        // Select the puppy-list HTML element for use in rendering the puppy
        // list content.
        this.puppyListElem = $("#puppy-list");
        this.render();
    },

    render: function() {
        var elem = "";
        // How do you know what functions you need the octopus to handle?
        // If the view needs something from the model, that's your cue to write
        // a function in the octopus to do it!
        var puppies = octopus.getPuppies();

        // This can be done via the view because you're not manipulating model
        // contents. You're taking the model contents octopus.getPuppies()
        // returned and then wrapping them in HTML tags. Fair game to do in the
        // view.
        $.each(puppies, function(puppyIndex, puppy) {
            elem += "<li class='puppy list-group-item'>" + puppy.name + "</li>";
        });
        this.puppyListElem.append(elem);

        // When the user clicks on a puppy's name from the puppy list, use JS
        // DOM features to extract the puppy's name. Use the name to then return
        // the ID of said puppy from the model. Then you can use
        // octopus.setCurrentPuppy() to change the puppy on display, passing in
        // the id of the appropriate puppy.
        $(".puppy").click(function(obj) {
                id = puppies.indexOf(puppies.filter(function(a){
                    return a.name == obj.target.innerHTML;
                })[0]);
                octopus.setCurrentPuppy(puppies[id]);
                puppyView.render();
        });
    }
};

var puppyView = {
    init: function() {
        this.puppyElem = $("#puppy");
        this.puppyNameElem = $("#puppy-name");
        this.puppyImageElem = $("#puppy-img");
        this.countElem = $("#puppy-count");

        // This could maybe go in the render portion? But init makes sense too
        // because the click handler will never change. Clicking the picture
        // will always increment the click count, even if the user selects
        // different puppies between image clicks.
        this.puppyImageElem.click(function() {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentPuppy = octopus.getCurrentPuppy();
        this.puppyNameElem.html(currentPuppy.name);
        // Only set src and alt attributes when the user clicks on a puppy name.
        if (currentPuppy.pic) {
            this.puppyImageElem.attr({"src": currentPuppy.pic,
                "alt": "puppy pic"});
        }
        // Only display number of clicks when the user clicks on a puppy name.
        if (currentPuppy.clicks >= 0) {
            this.countElem.html("Clicks: " + currentPuppy.clicks);
        }
    }
};

$(document).ready(function() {
    octopus.init();
});

