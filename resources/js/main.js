/* eslint-env jquery */

// Close when X clicked
$('.close').click(function(e) {
  $('.contact-container').removeClass('show');
  e.preventDefault();
  console.log('closing contact');
});

// Close when clicked outside form
$('.contact-container').click(function (e) {
  if (e.target !== e.currentTarget) return;
  $(this).removeClass('show');
});

// Open contact
$('.contact-link').click(function(e) {
  e.preventDefault();
  $('.contact-container').addClass('show');
  console.log('open contact');
});

$('#submit-msg').click(function(e) {
  console.log('submit');
  e.preventDefault();
});

// Check if element is off screen

function offScreen($el) {
  var offset = 20;
  var currentPosition = $(document).scrollTop();
  var position = $el.offset();
  //console.log(currentPosition, position);
  console.log(currentPosition, position, $el.offset());
  if (currentPosition > position.top + offset) {
    return true;
  }
  return false;
}

// Scroll eventlisteners
window.addEventListener('scroll', function(e) {
    
  var $main = $('#main-title');
  var $nav = $('#nav');
  var $links = $('#links');

  var $mainFixed = $('.main-title-container-fixed')[0];
  var $navFixed = $('.nav-fixed')[0];
  var $linksFixed = $('.links-fixed')[0];
  
  var titleOffScreen = offScreen($main);
  var menuOffScreen = offScreen($nav);
  var linksOffScreen = offScreen($links);
    
    
  // Show/hide fixed title
  if (titleOffScreen) {
      $mainFixed.style.display = 'block';
  } else {
      $mainFixed.style.display = 'none';
  }
    
  // Show/hide fixed nav menu
  if (menuOffScreen) {
    $navFixed.style.display = 'block';
  } else {
    $navFixed.style.display = 'none';
  }
    
  // Show/hide fixed links
  if (linksOffScreen) {
    $linksFixed.style.display = 'block';
    
  } else {
    $linksFixed.style.display = 'none';
  }
});
