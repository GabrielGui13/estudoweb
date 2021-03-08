function imprimirPares () {
    const arrayPares = []
    for (let i = 1; i < 101; i++) {
        if (i % 2 == 0) arrayPares.push(i)
    }
    return arrayPares
}

console.log(imprimirPares())