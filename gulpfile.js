// gulpfile.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const jsbeautifier = require('gulp-jsbeautifier');

gulp.task('css-compile', () => gulp.src('./public/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out/public')));

gulp.task('css-format', () => gulp.src(['./public/main.css'])
        .pipe(jsbeautifier())
        .pipe(gulp.dest('./public')));

gulp.task('html-compile', () => gulp.src('./public/index.html')
        .pipe(htmlmin({
          collapseWhitespace: true,
        }))
        .pipe(gulp.dest('./out/public')));

gulp.task('html-format', () => gulp.src(['./public/index.html'])
        .pipe(jsbeautifier())
        .pipe(gulp.dest('./public')));

gulp.task('favicon-compile', () => gulp.src('./public/favicon.ico')
        .pipe(gulp.dest('./out/public')));

gulp.task('format', ['css-format', 'html-format']);
gulp.task('compile', ['html-compile', 'css-compile', 'favicon-compile']);

gulp.task('build', ['format', 'compile']);

gulp.task('default', ['build']);
