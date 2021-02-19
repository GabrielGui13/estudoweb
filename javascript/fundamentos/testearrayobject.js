const object = {}

const pessoa1 = ['Joao', 'Homem', 23]
const pessoa2 = ['Maria', 'Mulher', 21]

function resultado () {
    if (pessoa1[1].charAt(0) == 'M') {
        object.nome = pessoa1[0]
        object.sexo = pessoa1[1]
        object.idade = pessoa1[2]
    }

    else {
        object.nome = pessoa2[0]
        object.sexo = pessoa2[1]
        object.idade = pessoa2[2]
    }

    console.log(object)
}

resultado()