gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);