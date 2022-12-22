const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-dart-sass");
const prettier = require("gulp-prettier");
const cleanCSS = require("gulp-clean-css");

function style() {
  return src("scss/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(prettier())
    .pipe(dest("css"))
    .pipe(cleanCSS())
    .pipe(dest("css/min"));
}

// Watch Task
function watchTask() {
  watch(["scss/**/*.scss"], series(style));
}

// Default Gulp task
exports.default = series(style, watchTask);
