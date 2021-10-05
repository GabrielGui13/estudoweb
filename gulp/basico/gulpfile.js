//precisa copiar o arquivo1 e arquivo2 da pastaA

const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo1.txt']) //selecionar quais arquivos como entrada para o workflow do arquivo
        //.pipe() //aplicar transformacoes nos arquivos de entrada, pode ser encadeado
        .pipe(gulp.dest('pastaB')) //gulp acaba criando uma pastaB e copiou os arquivos pra la atraves do dest()
    return cb()
}

function copiar2(cb) {
    gulp.src('pastaA/**/*.txt') //traz todos os arquivos em qualquer pasta que tenha txt
        .pipe(gulp.dest('pastaB'))
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2), //roda ao mesmo tempo
    copiar, //so roda quando acabar o parallel
    copiar2,
    fim
)

//ao executar 'gulp' na cli, ele procura um arquivo gulpfile.json
//necessita exportar uma task chamada default (module.exports eh um objeto)