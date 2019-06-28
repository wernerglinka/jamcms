import 'intersection-observer';
import Highway from '@dogstudio/highway';
import Quicklink from 'quicklink/dist/quicklink.mjs';
import Fade from './fade';

const prefetchLinks = document.querySelector('.main-menu');
Quicklink({
  el: prefetchLinks,
});

function initPageTransitions() {
  // Call Highway.Core once.
  // Store it in a variable to use events
  const H = new Highway.Core({
    transitions: {
      default: Fade,
    },
  });

  // load quickview upon Highway event when view is loaded
  H.on('NAVIGATE_END', ({ to }) => {
    Quicklink({
      el: to.view,
    });
  });

  // This event is sent everytime the `out()` method of a transition is run to hide a `data-router-view`
  H.on('NAVIGATE_OUT', ({ from, trigger, location }) => {
    // the section that we are transition out from has a data-router-view
    // attribute with the page name. This page name is also used as a body class
    const fromPage = from.view.dataset.routerView;

    // Remove the pagename body class
    document.body.classList.remove(fromPage);
  });

  // This event is sent everytime a `data-router-view` is added to the DOM Tree
  H.on('NAVIGATE_IN', ({ to, location }) => {
    const event = new Event('updateActiveTrail');
    document.dispatchEvent(event);
  });
}

export default initPageTransitions;
