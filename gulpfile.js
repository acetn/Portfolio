var gulp    = require("gulp"),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber');

//SCRIPTS TASK
//UGLIFY
gulp.task('scripts', function() {
    gulp.src('public/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/minjs'));    
})

//STYLES TASK
gulp.task('styles', function() {
    return
    sass('public/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets'));
});

//WATCH TASK
//WATCHES JS
gulp.task('watch', function() {
    gulp.watch('public/js/*.js', ['scripts']);
    gulp.watch('public/scss/**/*.scss', ['styles'])
});

gulp.task('default', ['scripts', 'styles', 'watch']);
