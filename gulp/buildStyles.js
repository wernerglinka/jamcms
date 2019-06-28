const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const streamqueue = require('streamqueue');

/**
 *  Function to build the site styles
 *
 *  It compiles SCSS into CSS and then merges normalize,css with the site styles
 *
 *  This function uses a gulp flag "--production" to toggle sourcemap generation
 *  "npm run develop" generates a sourcemap
 *  "npm run buildProd" does NOT generate a sourcemap
 *  Scripts are located in package.json
 *
 *  sources:
 *    http://blog.lotech.org/prefix-normalizecss-or-sanitizecss-before-gulp-sass.html
 */

module.exports = function buildStyles() {
  console.log('Building styles **************************************');

  // for "gulp", "util.env.production" will be undefined,"!!util.env.production" will coerce to boolean true
  // for "gulp --production", "util.env.production" will be true
  // source: https://j11y.io/javascript/truthy-falsey/
  const withSourceMap = !util.env.production;

  // we use normalize that was installed via npm
  const normalize = gulp.src(require.resolve('normalize.css'));

  // external fonts that are being imported with @import
  const fontImports = gulp.src('./src/sources/font-imports.css');

  const scss = gulp
    .src(`./src/styles/main.scss`)
    .pipe(gulpif(withSourceMap, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(withSourceMap, sourcemaps.write()));

  // fontImports MUST come first so @import rules are the very first in css
  // otherwise font will NOT be imported on localhost
  return (
    streamqueue({ objectMode: true }, fontImports, normalize, scss)
      .pipe(concat('styles.css'))
      // apply prefixes and compress with cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(gulp.dest(`./src/sources/assets`))
  );
};
