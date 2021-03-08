function concatFunc (int, string, double) {
    for (let i = 0; i < int.length; i++) {
        console.log(''.concat(int[i]).concat(string[i]).concat(double[i]))
        console.log(int[i] + string[i] + double[i])
    }

    return 'Fim'
}

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['Um', 'Dois', 'Tres', 'Quatro']
const vetorDouble = [1.5, 2.5, 3.5, 4.5]
concatFunc(vetorInteiro, vetorString, vetorDouble)