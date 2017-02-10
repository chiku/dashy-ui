// gulpfile.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const gulp = require('gulp');
const jsbeautifier = require('gulp-jsbeautifier');

gulp.task('css-format', () => gulp.src(['./src/main.css'])
        .pipe(jsbeautifier())
        .pipe(gulp.dest('./src')));

gulp.task('html-format', () => gulp.src(['./src/index.html'])
        .pipe(jsbeautifier())
        .pipe(gulp.dest('./src')));

gulp.task('format', ['css-format', 'html-format']);
gulp.task('default', ['format']);
