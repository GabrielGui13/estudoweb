const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cb) { //precisa receber a callback
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //arquivos de comentarios nao sejam transferidos
            presets: ["env"], //versao mais nova do javascript
        }))
        .pipe(uglify()) //codigo vai ser minificado na mesma linha, sem espacos, etc
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) //vai juntar todos os arquivos (min = convencao normal)
        .pipe(gulp.dest('build'))
    
    //return no gulp tambem funciona em vez da callback
    //retorna a callback para saber que terminou
}

function fim(cb) {
    console.log('Fim')
    return cb
}

exports.default = series(transformacaoJS, fim) //gulp no cli

//antes os codigos nao estavam no mesmo arquivo e nao funcionavam, agora estao juntos

