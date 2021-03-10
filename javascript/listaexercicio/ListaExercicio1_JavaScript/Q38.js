function imprimirNumeros (x1, x2) {
    let maior = 0
    let menor = 0

    if (x1 > x2) {
        maior = x1
        menor = x2
    } else {
        maior = x2
        menor = x1
    }

    for (let i = menor; i <= maior; i++) {
        if (i % 2 != 0) console.log(i)
    }
}

imprimirNumeros(100, 0)