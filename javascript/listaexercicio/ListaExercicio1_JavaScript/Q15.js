function comprarCarro (estilo) {
    switch (estilo.toLowerCase()) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'Motocicleta': case 'Sedan': case 'suv':
            console.log('Tem certeza que nao prefere esse modelo?')
            break
        default:
            console.log('Nao trabalhamos com esse tipo de automovel aqui')
            break
    }
}

comprarCarro('hatch')
comprarCarro('SUV')
comprarCarro('ferrari')