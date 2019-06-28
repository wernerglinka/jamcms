const gulp = require('gulp');
const compressJS = require('gulp-uglify');
const concat = require('gulp-concat');

module.exports = function vendorScripts() {
  console.log('building vendor scripts');

  return (
    gulp
      .src([
        'node_modules/jquery/dist/jquery.js',
        // 'node_modules/gsap/TweenLite.js',
        // 'node_modules/@dogstudio/highway/build/highway.js',
        // 'node_modules/swup/dist/swup.js',
        // 'node_modules/jquery.easing/jquery.easing.js',
        // 'node_modules/jquery-hoverintent/jquery.hoverIntent.js'
      ])
      .pipe(concat('vendors.min.js'))
      // .pipe(compressJS())
      .pipe(gulp.dest(`./src/sources/assets/scripts`))
  );
};
