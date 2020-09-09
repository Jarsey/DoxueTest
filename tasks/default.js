const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 3000
    });
});
// HTML打包
gulp.task('html', () => {
    return gulp.src('src/views/index.html')
        .pipe(gulp.dest('build/html'))
});

// SCSS解析压缩打包
gulp.task('css', () => {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false // 是否美化
        }))
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/css'))
});
// ES6转ES5
gulp.task('js', () =>
    gulp.src('src/js/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
);


gulp.task('default', gulp.series('html', 'css', 'webserver'));