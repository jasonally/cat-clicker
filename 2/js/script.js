function displayPuppy() {
    // Append puppy picture 1.
    var puppy = '<img id="puppy-picture-1" src="images/puppy.jpg" \
    alt="Puppy picture" />';
    $('#display-1').append(puppy);

    // Append clicks for puppy picture 1.
    var clicks = 0
    $('#count-1').text('Clicks: ' + clicks);

    // Increment clicks when user clicks on picture.
    $('#puppy-picture-1').click(function(object) {
        clicks += 1
        $('#count-1').text('Clicks: ' + clicks);
    });

    var puppy2 = '<img id="puppy-picture-2" src="images/puppy-2.jpg" \
    alt="Puppy picture" />';
    $('#display-2').append(puppy2);

    var clicks2 = 0
    $('#count-2').text('Clicks: ' + clicks2);

    $('#puppy-picture-2').click(function(object) {
        clicks2 += 1
        $('#count-2').text('Clicks: ' + clicks2);
    });
};

$(document).ready(function() {
    displayPuppy();
});