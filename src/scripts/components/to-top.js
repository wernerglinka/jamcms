import $ from 'jquery';

// the scroll to top function for long pages
function scrollToTop() {
  const hasToTop = $('#toTop').length;
  const toTop = $('#toTop');
  const TO_TOP_VISIBLE = 400;

  if (hasToTop) {
    toTop.on('click', function() {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        500,
        $.easeOutCubic
      );
      return false;
    });
    // hide scroll icon if content is at top already
    // normally we would check for $(window).scrollTop() but IE8 always return 0, what else is new
    if (
      $('body').scrollTop() < TO_TOP_VISIBLE &&
      $('html').scrollTop() < TO_TOP_VISIBLE
    ) {
      $('#toTop').hide();
    }
    // update scroll icon if window is resized
    $(window).resize(function() {
      if (
        $('body').scrollTop() < TO_TOP_VISIBLE &&
        $('html').scrollTop() < TO_TOP_VISIBLE
      ) {
        $('#toTop').hide();
      }
    });
    // manage scroll icon when scrolling
    $(window).scroll(function() {
      if (
        $('body').scrollTop() < TO_TOP_VISIBLE &&
        $('html').scrollTop() < TO_TOP_VISIBLE
      ) {
        $('#toTop').fadeOut(400);
      } else {
        $('#toTop').fadeIn(400);
      }
    });
  }
}

export default scrollToTop;
