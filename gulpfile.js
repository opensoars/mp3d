var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');

gulp.task('default', function () {
  console.log(
    'Run either gulp its build or watch task, ie npm run gulp-build.'
  );
});

gulp.task('copy', function () {
  return gulp
    .src('./src/**/*')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['copy'], function () {
  var babel_stream = babel();

  babel_stream.on('error', function (err) {
    console.log('[gulp-build] error\n', err);
    babel_stream.end();
  });

  return gulp.src('src/**/**.js')
    .pipe(babel_stream)
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*', ['build']);
});
