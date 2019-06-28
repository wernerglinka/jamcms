const gulp = require('gulp');

/**
 * Function to move the icon folder from node_modules into the
 * assets folder
 */
module.exports = function getIcons() {
  console.log('Getting icons from node_modules **********************');

  const iconSource = './node_modules/feather-icons/dist/icons/*.*';
  const iconTarget = './src/sources/assets/icons';

  return gulp.src(iconSource).pipe(gulp.dest(iconTarget));
};
