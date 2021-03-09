const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10, 11]

function adicionarVetor (arrayPilha, arrayAdiciona) {
    for (let i = 0; i < arrayAdiciona.length; i++) {
        console.log(arrayAdiciona[i])
        arrayPilha.push(arrayAdiciona[i])
    }

    return `Vetor adicionados = ${arrayAdiciona}
Vetor todos = ${arrayPilha}`
}

console.log(adicionarVetor(vetorPilha, vetorAdiciona))