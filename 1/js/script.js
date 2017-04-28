function displayPuppy() {
    // Append puppy picture.
    var puppy = '<img id="puppy-picture" src="images/puppy.jpg" \
    alt="Puppy picture" />';
    $('#display').append(puppy);

    // Append clicks.
    var clicks = 0
    $('#count').text('Clicks: ' + clicks);

    // Increment clicks when user clicks on picture.
    $('#puppy-picture').click(function(object) {
        clicks += 1
        $('#count').text('Clicks: ' + clicks);
    });
};

$(document).ready(function() {
    displayPuppy();
});