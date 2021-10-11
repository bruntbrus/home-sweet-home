/*
 * Gulp tasks
 */

/* jshint node: true */

const gulp = require('gulp')
const sequence = require('gulp-sequence')

// Runs all lint tasks
gulp.task('lint', sequence('lint:self', 'lint:src'))

// Lint checks this file
gulp.task('lint:self', () => lint(__filename))

// Lint checks all source files
gulp.task('lint:src', () => lint('src/**/*.js'))

// Runs all build tasks
gulp.task('build', sequence('build:src', 'build:min'))

// Builds main source file
gulp.task('build:src', () => build('src/main.js', 'public/js/main.js'))

// Builds minified main source file
gulp.task('build:min', () => minify('public/js/main.js', 'public/js/main.min.js'))

// Lint checks source files
function lint(src) {
  const jshint = require('gulp-jshint')

  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
}

// Bundles source files
function build(entry, dest) {
  const rollup = require('rollup')
  const string = require('rollup-plugin-string')
  const babel = require('rollup-plugin-babel')

  const options = {

    entry,
    dest,

    moduleName: 'app',
    format: 'iife',
    exports: 'named',
    sourceMap: true,

    plugins: [

      string({

        include: ['**/*.hbs'],
      }),

      babel({

        exclude: 'node_modules/**',
        presets: ['es2015-rollup'],
      }),
    ],

    external: [

      'jquery',
      'handlebars',
    ],

    globals: {

      jquery: 'jQuery',
      handlebars: 'Handlebars',
    },
  }

  return rollup.rollup(options).then((bundle) => bundle.write(options))
}

// Minifies source file
function minify(src, dest) {
  const uglify = require('gulp-uglify')
  const rename = require('gulp-rename')
  const sourcemaps = require('gulp-sourcemaps')
  const path = require('path')

  const options = {

    warnings: true,

    compress: {
      sequences: false,
    },
  }

  return gulp.src(src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify(options))
    .pipe(rename(path.basename(dest)))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(path.dirname(dest)))
}
