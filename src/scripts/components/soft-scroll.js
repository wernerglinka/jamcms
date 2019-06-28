import $ from 'jquery';

// function to scroll softly to on-page anchors
function softScroll() {
  // source: https://css-tricks.com/smooth-scrolling-accessibility/
  // URL updates and the element focus is maintained
  // originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

  // get the offset that is introduced by the fixed header
  const sectionHeaderClearance = 100;
  const headerOffset = $('.top-message').height() + sectionHeaderClearance;

  const locationPath = this.filterPath(location.pathname);
  const self = this;
  $('a[href^="#"]').each(function() {
    const thisPath = self.filterPath(this.pathname) || locationPath;
    const hash = this.hash;
    if ($(hash).length) {
      if (
        locationPath === thisPath &&
        (location.hostname === this.hostname || !this.hostname) &&
        this.hash.replace(/#/, '')
      ) {
        const $target = $(hash);
        const target = this.hash;
        if (target) {
          $(this).on('touchclick', event => {
            event.preventDefault();
            $('html, body').animate(
              {
                scrollTop: $target.offset().top - headerOffset,
              },
              1000
            );
          });
        }
      }
    }
  });
};

// filter handling for a /dir/ OR /indexordefault.page
filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
};

export default softScroll;