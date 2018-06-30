//
// You need to set up MIC_ENV first to make it work
//

const gulp = require("gulp");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const jshint = require('gulp-jshint');
const jade = require('gulp-jade');
const ngConstant = require('gulp-ng-constant');

const config = require('./config');

const scripts = require("./scripts");
const styles = require("./styles");

var devMode = false;

gulp.task("css", function() {
    gulp.src(styles)
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task("js", function() {
    gulp.src(scripts)
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task("html", function() {
    return gulp.src("./src/templates/**/*.html")
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.reload({
          stream: true
        }));
});

gulp.task('lint', function() {
    return gulp.src(['./src/**/*.js', '!./src/js/vendors/**/*.*'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jade', function() {
   gulp.src("./src/templates/**/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('constants', function () {
  var envConfig = config[process.env.MIC_ENV];
  return ngConstant({
      constants: envConfig,
      stream: true
    })
    .pipe(gulp.dest('./src/js'));
});

gulp.task("build", function() {
    gulp.start(["constants", "jade", "css", "lint", "js", "html"]);
});

gulp.task("browser-sync", function() {
    browserSync.init(null, {
        open: false,
        server: {
          baseDir: "dist"
        }
    });
});

gulp.task("start", function() {
    devMode = true;
    gulp.start(["build", "browser-sync"]);
    gulp.watch(["./src/css/**/*.css"], ["css"]);
    gulp.watch(["./src/js/**/*.js"], ["lint", "js"]);
    gulp.watch(["./src/templates/**/*.html"], ["html"]);
    gulp.watch(["./src/templates/**/*.jade"], ["jade"]);
});
