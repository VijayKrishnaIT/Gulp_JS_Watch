import { exec } from "child_process";
import * as gulp from "gulp";
import * as concat from "gulp-concat";
import * as minify from "gulp-minify";

gulp.task("task1", async () => {
    gulp.src("./dev/js/*.js")
        .pipe(concat("test.min.js"))
        .pipe(minify())
        .pipe(gulp.dest("./prod/js"));
});

gulp.task("server", async (arg1: any) => {
    exec("node server.js", (err) => {
        console.log(err);
    })
})

gulp.task("js_watch", async () => {
    gulp.src("./dev/js/*.js")
        .pipe(concat("final.min.js"))
        .pipe(minify())
        .pipe(gulp.dest("./prod/js"));
});

gulp.task("default", gulp.parallel["js_watch"]);