const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const order = require('gulp-order');
const concat = require('gulp-concat');

module.exports = function buildScripts() {
  console.log('building scripts');
  return gulp
    .src(`./src/scripts/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(order(['src/scripts/main.js', 'src/scripts/components/*.js']))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./src/sources/assets/scripts`));
};
