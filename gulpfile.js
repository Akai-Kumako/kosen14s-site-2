const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('sass', function () {
  gulp.src(['src/**/*.scss', '!src/**/_*.scss'])
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sass({
      pretty: true
    }))
    .pipe(gulp.dest('dest'));
});

gulp.task('scss', ['sass'])

gulp.task('jade', () => {
  return gulp.src(['src/jade/*.jade', '!src/jade/_*.jade'])
  .pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  }))
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('dest/html'));
});

gulp.task('pug', () => {
  return gulp.src(['src/pug/*.pug', '!src/pug/_*.pug'])
  .pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dest/html'));
});

gulp.task('build', ['sass', 'jade', 'pug'])

gulp.task('watch', () => {
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/jade/*.jade', ['jade']);
  gulp.watch('src/pug/*.pug', ['pug']);
});
