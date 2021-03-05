function mostrarResultado (nota) {
    if (nota < 38) return "Reprovado" //testa se eh reprovado e retorna
    else if (nota >= 38 && nota <= 40) return 40 //arredonda pra 40 notas acima de 38 e retorna 40

    for (let y = 1; y <= 5; y++) {
        let teste3 = nota + y
        let multiplo = 0
        if (teste3 % 5 == 0) {
            multiplo = teste3
        }
        if (nota + 3 < multiplo) return nota
    } //retorna notas que estiverem a mais de 3 pontos do proximo multiplo de 5
    
    if (nota % 5 == 0) return nota //retorna notas que ja sao multiplos de 5
    else {
       for (let i = 1; i < 4; i++) {
            let aux = nota + i
            if (aux % 5 == 0) return aux
        } 
    } //arredonda as notas para o proximo multiplo de 5
}

console.log(mostrarResultado(90))