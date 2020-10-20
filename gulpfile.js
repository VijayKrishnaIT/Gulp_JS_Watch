let gulp = require("gulp");
let concat = require("gulp-concat");
let minify = require("gulp-minify");

gulp.task("js_watch", async () => {
  gulp
    .src("./dev/js/*.js")
    .pipe(concat("final.min.js"))
    .pipe(minify())
    .pipe(gulp.dest("./prod/js"));
});

gulp.task("default", gulp.parallel("js_watch"));
gulp.task("watch", function () {
  gulp.watch("./dev/js/*.js", ["js_watch"]);
});
