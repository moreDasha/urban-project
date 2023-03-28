import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';    //сжимает css файл
import webpcss from 'gulp-webpcss';      //выводит webp изображения
import autoprefixer from 'gulp-autoprefixer';  //добавляет вендорные префиксы
import groupCssMediaQueries from 'gulp-group-css-media-queries';    //группирует медиа запросы

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
        {
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }
    ))
    .pipe(autoprefixer(
        {
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }
    ))
    .pipe(app.gulp.dest(app.path.build.css))  //сохраняет не сжатый css
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}