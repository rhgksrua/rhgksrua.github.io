$('.close').click(function(e) {
    $('.contact-container').removeClass('show');
    console.log('closing contact');
});

$('.contact').click(function(e) {
    $('.contact-container').addClass('show');
    console.log('open contact');
});
