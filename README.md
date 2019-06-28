# mStart - a Metalsmith Starter

I am modernizing my Metalsmith starter with Gulp 4 and Parcel so I can finally use modern Javascript.

This starter is a work in  progress. Eventually, it will include a blog setup as well. Suggestions for functionality are welcome.

Currently, this starter uses a navigation that is defined in `src/data/navigation.yml`. The site uses [HighwayJS](https://github.com/Dogstudio/highway) to animate page transitions and [Quicklink](https://github.com/GoogleChromeLabs/quicklink) to prefetch pagelinks.


## Build Process
- Optimize images
- Create responsive images
- Loads svg icons into the site asset folder
- Compiles all styles from scss to css
- Transpiles all javascripts from ES6 to ES5
- Uses Metalsmith to assemble the site

## Installation
To install you need to have gulp installed globally!

```batch
  $ https://github.com/wernerglinka/mstart.git
  $ npm install
```

## Build for Developing
`npm run develop`

## Build for Production
`npm run buildProd`

## Optimize Images
Uses [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

## Creates Responsive Images
Uses [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)

Site images are organized in folder `originalImages`. The folder structure must be as it will be used in the `images` folder that will be used on the site. The plugin creates all responsive files and stores them in the same folder structure in `src/sources/assets/images`. Metalsmith will move this folder to `site/assets`.

### For Example, transforms:
```
-originalImages
  -backgrounds
    banner-main.jpg
```

### To:
```
-src
  -sources
    -assets
      -images
        -backgrounds
          banner-main.jpg
          banner-main-large.jpg
          banner-main-medium.jpg
          banner-main-small.jpg
```

### So we can use
```html
<img class="image-responsive w500"
     srcset="/assets/images/backgrounds/banner-main.png 500w,
             /assets/images/backgrounds/banner-main-medium.png 800w,
             /assets/images/backgrounds/banner-main-large.png 1200w"
     src="/assets/images/backgrounds/banner-main-large.png" alt="">
```

## Loads SVG Icons into the Site Asset Folder
I am using [Feather Icons](https://www.npmjs.com/package/feather-icons). The icons are installed during `npm install` and then moved into the site asset folder buring the build process.

## Compiles Styles from SCSS to CSS
Builds the main css style sheet, combines it with `normalize.css`, adds vendor prefixes and minimizes the final style sheet.
For development it adds source maps.

## Transpiles Javascript from ES6 to ES5
Uses `gulp-parcel` to bundle modular javascript. 

## Uses Metalsmith to Assemble the Site
Metalsmith uses [Nunjucks](https://mozilla.github.io/nunjucks/) templating and the latest versions of [Metalsmith-in-place](https://github.com/metalsmith/metalsmith-in-place) and [Metalsmith-layouts](https://github.com/metalsmith/metalsmith-layouts). See https://github.com/metalsmith/metalsmith-in-place/wiki for more examples on how to use these two essential plugins.

Uses [Metalsmith-data-loader](https://github.com/tests-always-included/metalsmith-data-loader) to to add additional metadata from external files.

Uses [Metalsmith Linkcheck](https://github.com/gchallen/code.metalsmith-linkcheck) to check all internal and external links. Run `npm run linkcheck`.




