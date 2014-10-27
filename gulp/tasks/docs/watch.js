var gulp = require('gulp');

gulp.task('watch:docs', ['docs:setWatch', 'docs:browserSync'], function() {
  gulp.watch('./lib-docs/sass/**/*.sass', ['docs:sass']);
  gulp.watch('./lib-docs/images/**', ['docs:images']);
  gulp.watch(['./lib-docs/coffee/**/*.coffee'], ['docs:coffee']);
  gulp.watch('./lib-docs/jade/**/*.jade', ['docs:jade']);
  gulp.watch(['./lib-docs/jade/tests/**', './lib-docs/tests/**'], ['docs:test']);
});