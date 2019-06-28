const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function optimizeImages() {
  console.log('Optimizing images ***********************************');
  return gulp
    .src('./src/sources/assets/images/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest('./src/sources/assets/images'));
};
