import ghPages from "gulp-gh-pages";

export const deploy = () => {
    return app.gulp.src(`${app.path.build}/**/*.*`)
    .pipe(ghPages());
}