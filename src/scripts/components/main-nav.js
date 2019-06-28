import $ from 'jquery';

import setActiveTrail from './set-active-trail';

function mainNav() {
  const navLinks = $('.main-menu')
    .find('li')
    .find('> span');

  navLinks.on('click', function(event) {
    event.stopImmediatePropagation();
    navLinks
      .not($(this))
      .parent()
      .removeClass('open');
    $(this)
      .parent()
      .toggleClass('open');
  });

  $(document)
    .not(navLinks)
    .on('click', () => {
      navLinks.parent().removeClass('open');
    });

  // update active trail after page load
  document.addEventListener('updateActiveTrail', function() {
    setActiveTrail();
  });
}

export default mainNav;
