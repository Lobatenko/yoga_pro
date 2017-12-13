var gulp = require('gulp'), // Подключаем gulp
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['yoga_pro/**/*.sass', 'yoga_pro/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch(['yoga_pro/**/*.sass', 'yoga_pro/**/*.scss'],['sass']);

});

gulp.task('default', ['watch']);
