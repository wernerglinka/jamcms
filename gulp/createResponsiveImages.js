const gulp = require('gulp');
const responsive = require('gulp-responsive');
const cached = require('gulp-cached');

/**
 * Function auto generate small/medium/large version of images
 * to be used in responsive img/picture tags
 *
 * Bug in gulp-responsive plugin changes .jpg to .jpeg
 * Rolling back to version "2.12.0" will fix this
 * https://github.com/mahnunchik/gulp-responsive/issues/113
 */
module.exports = function images() {
  console.log('Creating source sets for images *********************');
  return gulp
    .src('./src/originalImages/**/*.*')
    .pipe(cached('processed-images'))
    .pipe(
      responsive(
        {
          // Resize all JPG images to three different sizes: 500, 800, and 1200 pixels
          '**/*.jpg': [
            {
              width: 500,
              rename: {
                suffix: '-small',
                extname: '.jpg',
              },
            },
            {
              width: 800,
              rename: {
                suffix: '-medium',
                extname: '.jpg',
              },
            },
            {
              width: 1200,
              rename: {
                suffix: '-large',
                extname: '.jpg',
              },
            },
            {
              // Compress, strip metadata, and rename original image
              rename: { extname: '.jpg' },
            },
          ],
          // Resize all PNG images to three different sizes: 500, 800, and 1200 pixels
          '**/*.png': [
            {
              width: 500,
              rename: {
                suffix: '-small',
                extname: '.png',
              },
            },
            {
              width: 800,
              rename: {
                suffix: '-medium',
                extname: '.png',
              },
            },
            {
              width: 1200,
              rename: {
                suffix: '-large',
                extname: '.png',
              },
            },
            {
              // Compress, strip metadata, and rename original image
              rename: { extname: '.png' },
            },
          ],
        },
        {
          // Global configuration for all images
          errorOnUnusedConfig: false,
          errorOnEnlargement: false,
          withoutEnlargement: true,
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false,
        }
      )
    )
    .pipe(gulp.dest('./src/sources/assets/images/'));
};
