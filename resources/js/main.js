// Close when X clicked
$('.close').click(function(e) {
    $('.contact-container').removeClass('show');
    e.preventDefault();
    console.log('closing contact');
});

// Close when clicked outside form
$('.contact-container').click(function(e) {
    if (e.target !== e.currentTarget) return;
    $(this).removeClass('show');
});

// Open contact
$('#contact').click(function(e) {
    e.preventDefault();
    $('.contact-container').addClass('show');
    console.log('open contact');
});

$('#submit-msg').click(function(e) {
    console.log('submit');
    e.preventDefault();
});

// Check if elemet off screen

function offScreen($el) {
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var currentPosition = $(document).scrollTop();
    position = $el.position();
    console.log(currentPosition, position.top);
    if (currentPosition > position.top) {
        return true;
    }
    return false;
}

window.addEventListener('scroll', function(e) {
    console.log(offScreen($('#main-title')));
});
