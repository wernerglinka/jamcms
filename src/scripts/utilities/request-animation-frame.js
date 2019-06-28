/**
 *  Fallback for old browsers
 */

function raf() {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(fn) {
      const timer = 16.66; // 60 fps
      setTimeout(fn, timer);
    };
  }
}

export default raf;
