// NOTE: main.js is called at the end of the document body - no DOMContentLoaded event needed
import raf from './utilities/request-animation-frame';
import initPageTransitions from './components/init-page-transitions';
import mainNav from './components/main-nav';
import setActiveTrail from './components/set-active-trail';
import toTop from './components/to-top';

(function() {
  raf(); // fallback for browsers with no raf
  initPageTransitions();
  setActiveTrail();
  toTop();
  mainNav();
})();
