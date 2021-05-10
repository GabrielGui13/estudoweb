Array.prototype.forEach2 = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) { 
    console.log(`${indice + 1}) ${nome}`)
})