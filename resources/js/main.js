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
