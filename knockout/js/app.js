function knockoutCode() {
    var initialPuppies = [
        {
            "name": "Fido",
            "pic": "images/puppy-1.jpg",
            "clickCount": 0,
            "nicknames": ["Fiddy", "Fidoman"]
        },
        {
            "name": "Buddy",
            "pic": "images/puppy-2.jpg",
            "clickCount": 0,
            "nicknames": ["Bizzle", "B-Money"]
        },
        {
            "name": "Hunter",
            "pic": "images/puppy-3.jpg",
            "clickCount": 0,
            "nicknames": ["Hunty"]
        },
        {
            "name": "Timber",
            "pic": "images/puppy-4.jpg",
            "clickCount": 0,
            "nicknames": ["T-Bone", "T-Dawg", "Ice-T", "Mr. T"]
        },
        {
            "name": "Cooper",
            "pic": "images/puppy-5.jpg",
            "clickCount": 0,
            "nicknames": ["Coop"]
        }
    ];

    // Variable which creates different instances of puppies. Kind of like a class in
    // Python, but JavaScript doesn't have classes. The JavaScript object type has
    // to do as a result.
    var Puppy = function(data) {
        this.name = ko.observable(data.name);
        this.pic = ko.observable(data.pic);
        this.clickCount = ko.observable(data.clickCount);
        this.nicknames = ko.observableArray(data.nicknames);

        this.level = ko.computed(function() {
            if (this.clickCount() > 20) {
                return 'Dog';
            }
            else if (this.clickCount() > 10) {
                return 'Puppy';
            }
            else {
                return 'Newborn';
            }
        }, this);
    }

    var ViewModel = function() {
        // Setting self = this means self represents the global object from
        // ViewModel. You can then refer to self in other functions within the
        // ViewModel to refer to the global object from ViewModel. If you tried
        // to use 'this' within the other functions, you'd run into problems.
        // This is because using 'this' within the other functions would refer
        // to the smaller binding context -- not to the global object.
        var self = this;

        this.puppyList = ko.observableArray([]);

        initialPuppies.forEach(function(puppyItem) {
            // Using the self trick, self.puppyList will really map to
            // this.puppyList from the ViewModel binding context.
            self.puppyList.push(new Puppy(puppyItem));
        });

        // By default, sets the currentPuppy to the first puppy in the puppyList
        // observable array when the page first loads. As the user clicks on
        // different puppies, this.currentPuppy will change in value using
        // this.setPuppy.
        this.currentPuppy = ko.observable(this.puppyList()[0]);

        // Check how the updating of incrementCounter works in the view. Because
        // incrementCounter is located in the ViewModel, not currentPuppy, you
        // need to use $parent.incrementCounter to use the function properly.
        this.incrementCounter = function() {
            self.currentPuppy().clickCount(self.currentPuppy().clickCount()
                + 1);
        };

        this.setPuppy = function(clickedPuppy) {
            self.currentPuppy(clickedPuppy);
        };
    }

    ko.applyBindings(new ViewModel());
};

document.addEventListener('DOMContentLoaded', function() {
    knockoutCode();
});