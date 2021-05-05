let numero = 25
let soma = 0

for (let i = 1; i < numero; i++) {
    if (i == 1) i++
    var aux = true

    for (let y = 2; y < i - 1; y++) {
        if (i % y == 0) aux = false
    } 
    if (aux == true) {
        soma += i
        console.log(i)
    }        
}

console.log('soma = ' + soma)