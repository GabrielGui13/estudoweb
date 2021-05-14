const alunos = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

const receberMelhorEstudante = function (obj) {
    const medias = Object.entries(alunos).map(e => {
        let nomeAluno = e[0].toString()
        let media = e[1].reduce((t, n) => t + n, 0) / e[1].length

        const obj = {}
        return Object.defineProperty(obj, media, {
            value: nomeAluno,
            writable: false,
            enumerable: true
        })
    })
    const maior = (medias.map(e => Object.entries(e)).sort())[medias.length - 1]

    const retorno = {nome: maior[0][1], media: Number(maior[0][0])}
    return retorno
}

const receberMelhorEstudante2 = function (obj) {
    const medias = Object.entries(alunos).map(e => {
        let nomeAluno = e[0].toString()
        let media = e[1].reduce((t, n) => t + n, 0) / e[1].length

        return {nome: nomeAluno, media: media}
    })
    const maior = medias.sort((a, b) => b.media - a.media)

    return maior[0]
}

console.log(receberMelhorEstudante(alunos))
console.log(receberMelhorEstudante2(alunos))