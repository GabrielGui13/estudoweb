const imprimirResultado = function(nota) {
    if (!isNaN(nota)) { //checa se eh numero
        if (nota > 7) {
            console.log('Aprovado!')
        }

        else {
            console.log('Reprovado!')
        }
    }

    else console.log('erro')
}

imprimirResultado(10) //aprovado
imprimirResultado(4) //reprovado
imprimirResultado('Epa') //Reprovado, pois vai comparar com o numero, ser falso, e imprime o else