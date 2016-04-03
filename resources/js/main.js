$('.close').click(function(e) {
    $('.contact-container').removeClass('show');
    e.preventDefault();
    console.log('closing contact');
});

$('#contact').click(function(e) {
    e.preventDefault();
    $('.contact-container').addClass('show');
    console.log('open contact');
});
