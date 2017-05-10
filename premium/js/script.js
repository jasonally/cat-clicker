// Per the MVO approach, the model contains the data used in our web app.
var model = {
    // Contains the appropriate puppy from the puppies array.
    currentPuppy: null,

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

// The octopus interfaces between the view and the model. The view and the
// model never directly communipuppye.
var octopus = {
    init: function() {
        // By default, set current puppy to the first one in the list.
        //
        // This is kind of like an alias. That way when you click the picture
        // and it increments the count, you're directly updating the click
        // value in the puppies array.
        model.currentPuppy = '';

        // Octopus should initialize the view components.
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
    // curretPuppy var, when you increment the counter you directly update
    // the clicks value in the array.
    incrementCounter: function() {
        model.currentPuppy.clicks++;
        puppyView.render();
    }
};

// The view controls the display -- what users see in the web app.
var puppyView = {
    init: function() {
        this.puppyElem = $("#puppy");
        this.puppyNameElem = $("#puppy-name");
        this.puppyImageElem = $("#puppy-img");
        this.countElem = $("#puppy-count");

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

var puppyListView = {
    init: function() {
        this.puppyListElem = $("#puppy-list");
        this.render();
    },

    render: function() {
        var elem = "";
        var puppies = octopus.getPuppies();

        $.each(puppies, function(puppyIndex, puppy) {
            elem += "<li class='puppy list-group-item'>" + puppy.name + "</li>";
        });
        this.puppyListElem.append(elem);
        // JavaScript DOM magic to get the name of the puppy, use it to get the
        // puppy ID, and then pass it into setCurrentPuppy.
        $(".puppy").click(function(obj) {
                id = puppies.indexOf(puppies.filter(function(a){
                    return a.name == obj.target.innerHTML;
                })[0]);
                octopus.setCurrentPuppy(puppies[id]);
                puppyView.render();
        });
    }
};

$(document).ready(function() {
    octopus.init();
});

