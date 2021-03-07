function lancarErro () {
    throw new Error ("Que fruta eh essa?")
}

function vendaDeFrutas (fruta) {
    switch (fruta.toLowerCase()) {
        case 'maca':
            console.log("Nao vendemos essa fruta aqui")
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi')
            break
        case 'melancia':
            console.log('Aqui esta, 3 reais o quilo')
            break
        default:
            lancarErro()
            break
    } 
}

vendaDeFrutas("MACA")
vendaDeFrutas("kiwi")
vendaDeFrutas("melancia")
vendaDeFrutas("uva")
