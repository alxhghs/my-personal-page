// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(window).resize(function(){
    var win = $(this);
    if (win.width() >= 767) {
        $('.collapse.navbar-collapse').click(function (e) {
            if( jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle' ) {
                jQuery('.navbar-collapse').collapse('toggle');
            }
        });
    }
});
//
if ($(window).width() < 767) {
    $('.collapse.navbar-collapse').click(function (e) {
        if( jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle' ) {
            jQuery('.navbar-collapse').collapse('toggle');
        }
    });
}

// this works but with a strange animation on wider screens
// if ($(window).width() < 768) {
//     $('.collapse.navbar-collapse').click(function (e) {
//         if( jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle' ) {
//             jQuery('.navbar-collapse').collapse('toggle');
//         }
//     });
// }