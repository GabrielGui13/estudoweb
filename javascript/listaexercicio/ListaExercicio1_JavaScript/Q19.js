function comprarLanche (codigo, qtd) {
    switch (codigo) {
        case 100:
            console.log(3 * qtd)
            break
        case 200:
            console.log(4 * qtd)
            break
        case 300:
            console.log(5.5 * qtd)
            break
        case 400:
            console.log(7.5 * qtd)
            break
        case 500:
            console.log(3.5 * qtd)
            break
        case 600:
            console.log(2.8 * qtd)
            break
        default:
            console.log("Produto nao existente")
            break
    }
}

comprarLanche(100, 2)
comprarLanche(200, 2)
comprarLanche(300, 2)
comprarLanche(400, 2)
comprarLanche(500, 2)
comprarLanche(600, 2)
comprarLanche(700, 2)
