# Puppy Clicker
This repo contains the iterations of the Cat Clicker app which students in Udacity's Full Stack Nanodegree Program build during The Frontend: JavaScript and AJAX section. As of April 2017, these app iterations are specifically part of the [JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989) course.

Because I'm a dog person, my app is Puppy Clicker instead of Cat Clicker.

### Iteration 1
The first iteration must satisfy these requirements:
- The application should display a picture of a cat and a number of clicks.
- The number of clicks should increment when the cat picture is clicked.

### Iteration 2
The second iteration must satisfy these requirements:
- The application should display two puppies. Each puppy includes:
    - the puppy's name
    - a picture of the puppy
    - text showing the number of clicks
- The number of clicks should increment when each puppy picture is clicked.

### Iteration 3
The third iteration must satisfy these requirements:
- The application should display
    - a list of at least 5 puppies, listed by name
    - an area to display the selected puppy
- In the puppy display area, the following should be displayed
    - the puppy's name
    - a picture of the puppy
    - text showing the number of clicks
- When a puppy's name is clicked in the list, the puppy display area should update to show the data for the selected puppy.
- The number of clicks in the puppy area should be unique to each puppy, and should increment when the puppy's picture is clicked.

### Iteration 4
The fourth iteration, which I'm referring to as Cat Clicker Premium, is identical to the third iteration except that it should use the Model-View-Octopus structure. Code pertaining to puppy data should be stored in the model and code pertaining to the user-facing view of the app should be stored in the view. A third component of code, the octopus, is responsible for manipulating data in the model based on user interactions which are captured from the view.

### Iteration 5
The fifth iteration, Cat Clicker Premium Pro, had to satisfy these additional visual requirements:
- An admin button
- An admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)

The app had to satisfy these interaction requirements:
- When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
- The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
- When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.
- When the cancel button in the admin area is pressed, the admin area disappears.
- When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area disappears.

Because this iteration still uses the MVO structure, it was much easier to implement these features in the model and the view. I spent most of my time making the octopus features work properly, which was the point of this exercise.

### Iteration 6
The sixth iteration refactors the app and uses a [knockout.js](http://knockoutjs.com/) organizational framework. The JavaScript and HTML code is much cleaner since there's no need to explicitly create octopus functions to link the view and the model. Knockout's declarative bindings allow the developer to put the viewmodel's logic directly in the HTML, cutting down on the repetive logic of iterations 4 and 5.

### Picture credits
The puppy pictures in my app iterations are from https://pixabay.com/, which contains pictures and photos anyone can use royalty free. Pictures and videos on Pixabay are released free of copyrights under Creative Commons CC0.