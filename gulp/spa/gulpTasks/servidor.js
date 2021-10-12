const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({ //build n termina
            port: 8080, //procura o index.html automaticamente
            open: true,
            livereload: true
        }))
}

function monitorarArquivos() {
    watch('src/**/*.html', () => gulp.series('appHTML')()) //sempre que alterar o html chama a task especifica
    watch('src/**/*.scss', () => gulp.series('appCSS')()) //sempre que alterar o css chama a task especifica
    watch('src/**/*.js', () => gulp.series('appJS')()) //sempre que alterar o js chama a task especifica
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) //sempre que alterar o img chama a task especifica
    
    return 
} 

module.exports = {
    monitorarArquivos,
    servidor
}