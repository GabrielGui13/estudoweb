const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    tsProject.src()
        .pipe(tsProject()) //projeto de compilacao
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)